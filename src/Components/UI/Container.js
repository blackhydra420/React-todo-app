import React, { useState } from "react";
import AddTaskButton from "../AddTaskButton/AddTaskButton";
import TaskForm from "../TaskForm/TaskForm";
import Card from "./Card";
import './Container.css';
import Tasks from "../Tasks/Tasks";


const Container = props => {

    const [tasks, setTask] = useState([]);

    const insertTaskData = task => {
        let newTask = {
            key: task.key,
            title: task.title,
            description: task.description
        }

        setTask((tasks) => [newTask, ...tasks]);
    }

    const [isEditing, setIsEditing] = useState(false);

    const enableEditing = () => {
        setIsEditing(true);
    }

    const disableEditing = () => {
        setIsEditing(false);
    }

    const taskCancelHandler = key => {
        setTask((tasks) => tasks.filter(task => task.key !== key));
    }

    let containerJSX = <AddTaskButton openForm={enableEditing} />;
    if(isEditing) containerJSX = <TaskForm closeForm={disableEditing} addTaskData={insertTaskData} />;

    return (
        <Card className="container">
            {containerJSX}
            { tasks.map( task => <Tasks cancelTask={taskCancelHandler} key={task.key} id={task.key} title={task.title} description={task.description} />) }
        </Card>
    );
}

export default Container;