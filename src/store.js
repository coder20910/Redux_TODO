import {createStore} from "redux";

let initialState = {
    taskList : []
}

function TaskReducer(state = initialState , action){
    // update
        // state change logic
    switch (action.type) {
        case "add_Task":
            return {taskList : [...state.taskList, { task: action.payload, id: state.taskList.length }]}
            
        case "delete_Task":
                let fileteredList = state.taskList.filter(function (task) {
                    return task.id !== action.payload;
                })
                let newState = {
                    taskList: fileteredList
                }
                return newState;
        default:
            return state;
    }

}
const store = createStore(TaskReducer);
export default store;