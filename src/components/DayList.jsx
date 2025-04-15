import React from 'react';
import { useParams } from 'react-router-dom';
import TaskList from './TaskList';
import AddTask from './AddTask';

const DayList = ({ days, addTask, toggleComplete, deleteTask }) => {
    const { id } = useParams();
    const day = days.find((day) => day.id === id);

    if (!day) {
        return <div>Day not found</div>;
    }


    return (
        <div className={"day_list"}>
            <h2>{day.name}</h2>
            <AddTask addTask={(task) => addTask(id, task)} />
            <TaskList
                tasks={day.tasks}
                toggleComplete={(taskId) => toggleComplete(id, taskId)}
                deleteTask={(taskId) => deleteTask(id, taskId)}
            />
        </div>
    );
};

export default DayList;
