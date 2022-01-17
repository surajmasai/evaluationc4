import { LOGIN_STATUS, POST_ERROR, POST_LOADING, POST_SUCCESS } from "./actionTypes"

export const postLoading=()=>{
    return {
        type:POST_LOADING
    }
}

export const postSuccess=(payload)=>{
    return {
        type:POST_SUCCESS,
        payload
    }
}

export const postError=(payload)=>{
    return {
        type:POST_ERROR,
        payload
    }
}

// export const loginStatus=(payload)=>{
//     return {
//         type:LOGIN_STATUS,
//         payload
//     }
// }