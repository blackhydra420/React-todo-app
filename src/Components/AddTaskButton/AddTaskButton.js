import React from "react";
import './AddTaskButton.css';

const AddTaskButton = props => {

    const addTaskHandler = event => {
        props.openForm();
    }

    return (
        <button className="add-task" onClick={addTaskHandler}>Add Task</button>
    );
}

export default AddTaskButton;