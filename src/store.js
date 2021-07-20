import { createStore } from "redux";

let initialState = {
    taskList : []
}

function TaskReducer(state = initialState, action){
    switch (action.type) {
        case "addTask":
            return {taskList: [...state.taskList, {task:action.payload,id:state.taskList.length}]}
        case "deleteTask":
            let filteredList = state.taskList.filter((task)=>{
                return task.id != action.payload;
            })
            return {taskList:filteredList};
        default:
            return state;
    }
}
const store = createStore(TaskReducer);
export default store;