import React,  {useState} from 'react';
import {connect} from "react-redux";

function InputContainer(props) {
    const [value, setvalue] = useState("");
    return (
        <div>
            <input type="text" value={value} onChange={(e)=>setvalue(e.target.value)}></input>
            <button onClick={() =>{
                props.addTask(value); 
                setvalue("")}}>AddTask</button>
        </div>
    )
}
const mapStateToProps = store => {
    return store;
}
function maptoDispatchProps(dispatch){
    return {
        addTask: (val)=>{dispatch({type: "add_Task", payload:val})}
    }
}
export default connect(mapStateToProps, maptoDispatchProps)(InputContainer);