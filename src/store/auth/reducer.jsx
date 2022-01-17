import { LOGIN_STATUS, REGIS_ERROR, REGIS_LOADING, REGIS_SUCCESS } from "./actionTypes"


const init={loading:false,login:[],error:false,status:'logout'}

export const regisReducer=(state=init,{type,payload})=>{
    switch(type){
        case REGIS_LOADING:return{
            ...state,
            loading:true
        }

        case REGIS_SUCCESS:return{
            ...state,
            login:[...state.login,payload],
            loading:false
        }

        case REGIS_ERROR:return{
            ...state,
            loading:false,
            error:true
        }

        case LOGIN_STATUS:return{
            ...state,
            status:payload
        }

        default:return state


    }
}