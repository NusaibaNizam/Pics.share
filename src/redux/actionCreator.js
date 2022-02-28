import * as actionTypes from './actionTypes'
export const addData=(data)=>{
    return dispatch=>{
        fetch("https://react-cc625-default-rtdb.firebaseio.com/data.json",{
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

export const loadData=()=>{
    return dispatch=>{
        fetch("https://react-cc625-default-rtdb.firebaseio.com/data.json")
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