import { FETCH_TASKS , NEW_TASK } from '../Actions/types';

const initialState = {
    fetch_tasks :[],
    single_task:{}
}

export default function(state = initialState ,action){
    switch(action.type){
        case FETCH_TASKS:
            return {
                ...state , fetch_tasks:action.payload
            };
        case NEW_TASK:
            return{
                ... state , single_task:action.payload
            }
        default:
            return state;
    }
}