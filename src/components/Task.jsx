import React from "react";

const Task = ({ task, toggleComplete, deleteTask }) => {
    return (
        <div className="task">
            <input
                className="checkbox_task"
                type="checkbox"
                id={`task-${task.id}`}
                checked={task.completed}
                onChange={() => toggleComplete(task.id)}
            />
            <label htmlFor={`task-${task.id}`}>
                <span
                    style={{
                        textDecoration: task.completed ? 'line-through' : '',
                        color: task.completed ? '#b4b4b4' : ''
                    }}
                >
                    {task.text}
                </span>
            </label>
            <button
                className="delete_but"
                onClick={() => deleteTask(task.id)}
            >
                delete
            </button>
        </div>
    );
};

export default Task;