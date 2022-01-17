import { LOGIN_STATUS, POST_ERROR, POST_LOADING, POST_SUCCESS } from "./actionTypes"


const init={loading:false,post:[],error:false,status:'logout'}

export const postReducer=(state=init,{type,payload})=>{
    switch(type){
        case POST_LOADING:return{
            ...state,
            loading:true
        }

        case POST_SUCCESS:return{
            ...state,
            post:[...state.post,payload],
            loading:false
        }

        case POST_ERROR:return{
            ...state,
            loading:false,
            error:true
        }

        // case LOGIN_STATUS:return{
        //     ...state,
        //     status:payload
        // }

        default:return state


    }
}