import React from 'react';
import {connect} from "react-redux";

function Tasklist(props) {
    console.log(props);
    return (
        <div className="task-list">
            <ul>{props.taskList.map((taskObj) => {
                return (
                    <li style={{listStyle:"none"}}className="task-i" key={taskObj.id}>
                        <p>{taskObj.task}</p>
                        <button onClick={() => props.deleteTask(taskObj.id)}>Delete</button>
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
const maptoDispatchProps = dispatch => {
    return {
        deleteTask: (val)=> dispatch( {
                type: "delete_Task",
                payload: val
            }
        )
    }
}

export default connect(mapStateToProps, maptoDispatchProps)(Tasklist);
