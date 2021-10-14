import React, { useState } from "react";
import './TaskForm.css';

const TaskForm = props => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const formSubmitHandler = event => {
        event.preventDefault();

        const taskData = {
            key: Math.random().toString(),
            title: title,
            description: description
        }

        props.addTaskData(taskData);

        props.closeForm();
    }

    const tilteChangeHandler = event =>{
        setTitle(event.target.value);
    }

    const desriptionChangeHandler = event => {
        setDescription(event.target.value);
    }

    return(
        <form className="form-container" onSubmit={formSubmitHandler}>
            <div className="form-control">
                <input className="task-input" placeholder="Title" type="text" maxLength="40" value={title} onChange={tilteChangeHandler} required />
            </div>
            <div className="form-control">
                <input className="description-input" placeholder="Description" type="text" maxLength="120" value={description} onChange={desriptionChangeHandler} />
            </div>
            <button type="submit" >Add Task</button>
        </form>
    );
}

export default TaskForm;