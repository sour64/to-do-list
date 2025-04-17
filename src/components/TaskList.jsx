import React from "react";
import Task from "./Task";
import CircularProgress from "./CircularProgress"

const TaskList = ({ tasks, toggleComplete, deleteTask }) => {
    const sortedTasks = [...tasks].sort((a, b) => {
        if (a.completed && !b.completed) return 1;
        if (!a.completed && b.completed) return -1;
        return 0;
    });

    const countCompleted = tasks.filter(task => task.completed).length;

    return (
        <div className="task_list">
            {/* Счетчик выполненных задач */}
            <div className="completed-counter">
                Завершено задач: {countCompleted} / {tasks.length}
                <CircularProgress
                    tasks={tasks}
                />
            </div>
            {sortedTasks.map((task) => (
                <Task
                    key={task.id}
                    task={task}
                    toggleComplete={toggleComplete}
                    deleteTask={deleteTask}
                />
            ))}
        </div>
    );
};

export default TaskList;