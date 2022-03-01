import * as actionTypes from './actionTypes'
let initState={
    datas:[],
    isAuth:false,
    token: null
}
export const rootReducer=(state=initState,action)=>{
    switch(action&&action.type){
        case actionTypes.ADD_DATA:
            return {
                ...state, datas: state.datas.concat(action.payload)
            }
        case actionTypes.DELETE_DATA:
            return{
                ...state,
                datas: state.datas.filter((data)=>{
                    return data.key!==action.payload
                })
            }
        case actionTypes.SET_DATA:
            return {
                ...state,
                datas:action.payload
            }
        case actionTypes.ATHENTICATE_USER:
            return{
                ...state,
                isAuth:true,
                token:action.payload
            }
        case actionTypes.LOGOUT_USER:
            return{
                ...state,
                isAuth:false
            }
        
        default:
            return state;

    }

}