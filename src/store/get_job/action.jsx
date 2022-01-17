import { LOGIN_STATUS, GETJOB_ERROR, GETJOB_LOADING, GETJOB_SUCCESS } from "./actionTypes"

export const getjobLoading=()=>{
    return {
        type:GETJOB_LOADING
    }
}

export const getjobSuccess=(payload)=>{
    return {
        type:GETJOB_SUCCESS,
        payload
    }
}

export const getjobError=(payload)=>{
    return {
        type:GETJOB_ERROR,
        payload
    }
}

// export const loginStatus=(payload)=>{
//     return {
//         type:LOGIN_STATUS,
//         payload
//     }
// }