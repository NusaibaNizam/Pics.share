import * as actionTypes from './actionTypes'
export const addData=(data)=>{
    return{
        type: actionTypes.ADD_DATA,
        payload: data
    }
}
export const deleteData=(key)=>{
    return{
        type: actionTypes.DELETE_DATA,
        payload: key
    }
}