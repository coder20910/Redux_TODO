import React from 'react';
import {connect} from 'react-redux';

function Tasklist(props) {
    return (
        <div className="task-list">
                <ul>{props.taskList.map((taskObj) => {
                    return (
                        <li style={{listStyle:"none"}}className="task-i" key={taskObj.id}>
                            <p>{taskObj.task}</p>
                            <button onClick={() =>props.deleteTask(taskObj.id)}>Delete</button>
                        </li>
                    )
                })
                }
                </ul>
            </div>
    )
}
const mapStateToProps = store => {
    return store;
}
function maptoDispatchProps(dispatch){
    return {
        deleteTask: (val)=>{dispatch({type: "deleteTask", payload:val})}
    }
}

export default connect(mapStateToProps, maptoDispatchProps)(Tasklist);