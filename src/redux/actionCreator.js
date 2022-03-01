import * as actionTypes from './actionTypes'
import { navigate } from '../../navigationhelper'
export const addData=(data)=>{
    return (dispatch,getState)=>{
        let token=getState().token
        fetch("https://react-cc625-default-rtdb.firebaseio.com/data.json?auth="+token,{
            method: "POST",
            body: JSON.stringify(data)
        }).catch(e=>{
            console.log(e)
        }).then(res=>{
            res.json()
        }).then(data=>{
            console.log(data)
        })
    }
}
export const dataBaseDeleteData=(key)=>{
    return (dispatch,getState)=>{
        let token=getState().token
        fetch(`https://react-cc625-default-rtdb.firebaseio.com/data/${key}.json?auth=${token}`,{
            method: "DELETE"
        }).catch(e=>{
            console.log(e)
        }).then(res=>{
            res.json()
        }).then(data=>{
            dispatch(deleteData(key))
            console.log(data)
        })
    }
}

export const loadData=()=>{
    return (dispatch,getState)=>{
        let token=getState().token
        fetch("https://react-cc625-default-rtdb.firebaseio.com/data.json?auth="+token,)
        .catch(err=>{
            console.log(err)
            alert(err)
        })
        .then(res=>res.json())
        .then(data=>{
            const datas=[];
            for(let key in data){
                datas.push({
                    ...data[key],
                    key:key
                })
            }
            dispatch(setData(datas));
        })
    }
}

export const deleteData=(key)=>{
    return{
        type: actionTypes.DELETE_DATA,
        payload: key
    }
}
export const setData=(datas)=>{
    return{
        type:actionTypes.SET_DATA,
        payload: datas
    }

}

export const tryAuth=(email,pass,setAuthState,authState,authType)=>{
    let url=""
    if(authType==='signUp'){
        url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAPSScfxqa_edfD4QE56bam9UBGEGMXUyE'
    }else{
        url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAPSScfxqa_edfD4QE56bam9UBGEGMXUyE'
    }
    return dispatch=>{
        fetch(url,{
            method:'POST',
            body: JSON.stringify({
                email:email,
                password:pass,
                returnSecureToken:true
            }),
            headers:{
                "Content-Type":"application/json"
            }
        })
        .catch(err=>{
            console.log(err);
            alert('Authintication failed! Something went wrong.')
        })
        .then(res=>res.json())
        .then(data=>{

            console.log(data)
            if(data.error){
                
               console.log(data.error);
               let failedMsg=""
               if(authType==='signUp'){
                   failedMsg="Sing up failed. "
               }else{
                   failedMsg="Login failed. "
               }
               alert(failedMsg+ data.error.message)
            }else{
                dispatch(authUser(data.idToken))
                setAuthState({
                    ...authState,
                    mode:'login',
                    inputs:{
                        email:"",
                        pass:"",
                        confPass:"",
                    }
                })
                navigate('Home')

            }
        })
    }
}
export const authUser=(token)=>{
    return{
        type:actionTypes.ATHENTICATE_USER,
        payload:token
    }
}
export const logoutUser=()=>{
    return{
        type:actionTypes.LOGOUT_USER
    }
}