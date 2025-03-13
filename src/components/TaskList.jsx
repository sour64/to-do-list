import React from "react";
import Task from "./Task";

const TaskList = ({tasks, toggleComplete, deleteTask}) => {
    return (
        <div className={'task_list'}>
            {tasks.map((task) => (
                <Task
                    key = {task.id}
                    task={task}
                    toggleComplete={toggleComplete}
                    deleteTask={deleteTask}
                />
            ))}
        </div>
    )
}

export default TaskList;
