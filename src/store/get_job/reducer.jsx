import { LOGIN_STATUS, GETJOB_ERROR, GETJOB_LOADING, GETJOB_SUCCESS } from "./actionTypes"


const init={loading:false,job:[],error:false,status:'logout'}

export const getjobReducer=(state=init,{type,payload})=>{
    switch(type){
        case GETJOB_LOADING:return{
            ...state,
            loading:true
        }

        case GETJOB_SUCCESS:return{
            ...state,
            job:payload,
            loading:false
        }

        case GETJOB_ERROR:return{
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