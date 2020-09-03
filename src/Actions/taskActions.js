import { FETCH_TASKS , NEW_TASK } from './types';

export const fetchTasks = () => dispatch =>{
    console.log("fetching")
    fetch ('http://127.0.0.1:8000/Todo/tasks/')
     .then(res => res.json)
     .then(tasks => dispatch({
         type : FETCH_TASKS,
         payload : tasks.data
     }))
}

export const createTask = (taskData) => (dispatch) =>{
    fetch ()
    .then(res => res.json)
    .then(task => dispatch({
        type : NEW_TASK,
        payload : task.data

    }))
}