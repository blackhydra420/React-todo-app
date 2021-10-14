import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Tasks.css';

const Tasks = props => {
    let color = {
        'task-container':{
            background: 'var(--task-container-default-color)'
        },
        'task-title':{
            color: 'var(--task-title-default-color)'
        },
        'task-description':{
            color: 'var(--task-description-default-color)'
        },
        'task-cancel':{
            boxShadow:  '4px 4px 7px var(--task-cancel-default-neumorphis-dark), -4px -4px 7px var(--task-cancel-default-neumorphis-light)'
        },
        'task-done':{
            
        }
    }

    const [cssColor, setCssColor] = useState(color);

    const taskDoneHandler = event => {
        color = {
            'task-container':{
                background: 'var(--task-container-checked-color)'
            },
            'task-title':{
                color: 'var(--task-title-checked-color)'
            },
            'task-description':{
                color: 'var(--task-description-checked-color)'
            },
            'task-cancel':{
                boxShadow:  '4px 4px 7px var(--task-cancel-checked-neumorphis-dark), -4px -4px 7px var(--task-cancel-checked-neumorphis-light)'
            },
            'task-done':{
                display: 'none'
            }
        }

        setCssColor(color);
    }

    const taskCancelHandler = event => {
        props.cancelTask(props.id);
    }

    return (
        <div className="task-container" style={cssColor['task-container']}>
            <div className="task-data">
                <h2 className="task-title" style={cssColor['task-title']}>{props.title}</h2>
                <div className="task-description" style={cssColor['task-description']}>{props.description}</div>
            </div>
            <div className="task-actions">
                <button className="task-done" style={cssColor['task-done']} onClick={taskDoneHandler}>
                    <FontAwesomeIcon icon={faCheck} />
                </button>
                <button className="task-cancel" style={cssColor['task-cancel']} onClick={taskCancelHandler}>
                    <FontAwesomeIcon icon={faTimes} />
                </button>
            </div>
        </div>
    );
}

export default Tasks;