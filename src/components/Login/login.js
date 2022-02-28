import React,{useState} from "react";
import { View, Text, Button,TextInput } from "react-native";
const Login=(props)=>{
    const[authState,setAuthState]=useState({
        mode:'login',
        inputs:{
            email:"",
            pass:"",
            confPass:"",
        }
    })


    return(
        <View>
            <Text>
                Login Screen
            </Text>
            <TextInput
                placeholder="Email"

            />

            <TextInput
                placeholder="Password"

            />

            <TextInput
                placeholder="Confirm Password"

            />
            <Button title="Login" onPress={()=>{props.navigation.navigate('Home')}}/>
        </View>
    );
}
export default Login;