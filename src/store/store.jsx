import { regisReducer } from "./auth/reducer";
import {combineReducers, createStore} from 'redux'
import {postReducer} from './job_post/reducer'
import { getjobReducer } from "./get_job/reducer";

const rootReducer=combineReducers({
    auth:regisReducer,
    post:postReducer,
    job:getjobReducer
})

export const store=createStore(rootReducer)