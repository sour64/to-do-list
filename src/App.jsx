import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideBar from './components/SideBar';
import DayList from './components/DayList';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

const App = () => {
    const [days, setDays] = useState(() => {
        const savedDays = localStorage.getItem('days');
        return savedDays ? JSON.parse(savedDays) : [];
    });

    useEffect(() => {
        localStorage.setItem('days', JSON.stringify(days));
    }, [days]);

    const addDay = (day) => {
        setDays([...days, day]);
    };

    const addTask = (dayId, task) => {
        // Создаем новую задачу с уникальным идентификатором
        const newTask = { id: uuidv4(), ...task };

        // Обновляем массив дней
        const updatedDays = days.map((day) => {
            // Если текущий день совпадает с dayId, добавляем новую задачу
            if (day.id === dayId) {
                return {
                    ...day,
                    tasks: [...day.tasks, newTask]
                };
            }
            // Если не совпадает, возвращаем день без изменений
            return day;
        });
        console.log(updatedDays)
        setDays(updatedDays);
    };

    const toggleComplete = (dayId, taskId) => {
        const updatedDays = days.map((day) => {
            if (day.id === dayId) {
                const updatedTasks = day.tasks.map((task) => {
                    if (task.id === taskId) {
                        return {
                            ...task,
                            completed: !task.completed
                        };
                    }
                    return task;
                });
                return {
                    ...day,
                    tasks: updatedTasks
                };
            }
            return day;
        });

        setDays(updatedDays);
    };

    const deleteTask = (dayId, taskId) => {
        const updatedDays = days.map((day) => {
            if (day.id === dayId) {
                const updatedTasks = day.tasks.filter((task) => task.id !== taskId);
                return {
                    ...day,
                    tasks: updatedTasks
                };
            }
            return day;
        });

        setDays(updatedDays);
    };

    const deleteDay = (dayId) => {
        const updatedDays = days.filter((day) => day.id !== dayId);
        setDays(updatedDays);
    };



    return (
        <Router>
            <div className="App">
                <SideBar days={days} addDay={addDay} deleteDay={deleteDay}/>
                <div className="content">
                    <Routes>
                        <Route path="/day/:id" element={
                            <DayList
                                days={days}
                                addTask={addTask}
                                toggleComplete={toggleComplete}
                                deleteTask={deleteTask}
                            />
                        } />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
