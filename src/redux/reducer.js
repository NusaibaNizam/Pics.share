import * as actionTypes from './actionTypes'
let initState={
    datas:[]
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
        default:
            return state;

    }

}