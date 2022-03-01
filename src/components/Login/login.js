import React,{useState} from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import backgroundImage from "../../../assets/images/background.jpeg"
import { tryAuth} from "../../redux/actionCreator";
import { connect } from "react-redux";

const mapStateToProps=(state)=>{
    return{
        isAuth:state.isAuth
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        tryAuth:(email,pass,setAuthState,authState,authType)=>dispatch(tryAuth(email,pass,setAuthState,authState,authType)),
    }
}


const Login=(props)=>{
    const[authState,setAuthState]=useState({
        mode:'login',
        inputs:{
            email:"",
            pass:"",
            confPass:"",
        }
    })
    const switchViews=()=>{
        let state='login'
        if(authState.mode==='login')
            state='signup'
        setAuthState({
            ...authState,
            mode:state,
            inputs:{
                email:"",
                pass:"",
                confPass:"",
            }
        })
    }

    const updateInput =(val, name)=>{
        setAuthState({
            ...authState,
            inputs:{
                ...authState.inputs,
                [name]:val
            }
        })
        
    }


    const handleAuth=()=>{
        const email=authState.inputs.email
        const pass=authState.inputs.pass
        const confPass=authState.inputs.confPass

        const reg=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
        if(email.length==0){
            alert('Email not entered!')
        }
        else if(pass.length==0){
            alert('Pasword not entered!')
        }
        else if(authState.mode==='signup'&& pass.length<6){
            alert('Password must be at least 6 characters')
        }
        else if(authState.mode==='signup'&& confPass.length==0){
            alert('Confirm Password')
        }else if(authState.mode==='signup'&& !confPass.length==0 && pass!==confPass){
            alert('Passwords don\'t match')
        }
        else if(!reg.test(email)){
            alert('Invalid email');
            updateInput("",'email')
        }
        else {
            if(authState.mode!=='login'){
                props.tryAuth(email,pass,setAuthState,authState,'signUp')
            }else{
                props.tryAuth(email,pass,setAuthState,authState,'login')
            }
        }
        

    }

    let confPass=null;
    if(authState.mode==='signup')
        confPass=
        <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            value={authState.inputs.confPass}
            secureTextEntry={true}
            onChangeText={value=>updateInput(value,'confPass')}
        />

    return(
    <ImageBackground source={backgroundImage} style={{width:'100%', flex:1,}} blurRadius={5}>
        <View style={styles.login}>

            
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={authState.inputs.email}
                onChangeText={value=>updateInput(value,'email')}
            />

            <TextInput
                style={styles.input}
                placeholder="Password"
                value={authState.inputs.pass}
                secureTextEntry={true}
                onChangeText={value=>updateInput(value,'pass')}
            />
            {confPass}
            <TouchableOpacity 
                style={styles.butnContainer}
                onPress={()=>handleAuth()}
            >
                <Text style={styles.btn}>{authState.mode==='login'?'Login':'Sign Up'}</Text>
            </TouchableOpacity>

            <TouchableOpacity

            style={styles.topButnContainer}
            onPress={()=>switchViews()}

            >
                <Text style={styles.topBtn}>{authState.mode==='login'?'Switch to Sign Up':'Switch to Login'}</Text>
            </TouchableOpacity>
        </View>
    </ImageBackground>
        
    );
}

const styles=StyleSheet.create({
    login:{
        flex:1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    input:{
        marginTop: '3%',
        width: '80%',
        marginLeft:'10%',
        marginRight:'10%',
        padding:'1%',
        borderBottomColor:'pink',
        borderBottomWidth:2
    },
    btn:{
        fontSize:20,
        color:`#fffff0`,
        alignSelf:'center'
    },
    butnContainer:{
        width:'60%',
        paddingVertical:6,
        backgroundColor:`#ff69b4`,
        borderRadius:5,
        marginTop:'5%',
        justifyContent:'center',
        alignItems:'center'
    },
    topBtn:{
        fontSize:12,
        color:`#ff69b4`,
        alignSelf:'center'
    },
    topButnContainer:{
        width:'60%',
        paddingVertical:3,
        justifyContent:'center',
        alignItems:'center',
        margin:'5%'
    },

})
export default connect(mapStateToProps,mapDispatchToProps)(Login);