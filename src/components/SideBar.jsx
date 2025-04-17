import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';


const SideBar = ({ days, addDay, deleteDay }) => {
    const [selectedDay, setSelectedDay] = useState(null);
    const [dayName, setDayName] = useState('');

    const handleAddDay = () => {
        if (dayName.trim()) {
            addDay({ id: uuidv4(), name: dayName, tasks: [] });
            setDayName('');
        }
    };

    const selectDay = (day) => {
        setSelectedDay(day)
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleAddDay();
        }
    };

    const countCompletedTasks = (day) => {
        return day.tasks ? day.tasks.filter(task => task.completed).length : 0;
    }

    return (
        <div className="sidebar">
            <input
                className={"side_input"}
                type="text"
                placeholder="day name"
                value={dayName}
                onChange={(e) => setDayName(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <button className={"add_day_button"} onClick={handleAddDay}>add a day</button>
            <ul className={"ul_side"}>
                {days.map((day) => (
                    <Link to={`/day/${day.id}`}>
                        <li
                            className={`li_side ${selectedDay?.id === day.id ? 'selected' : ''}`}
                            key={day.id}
                            onClick={() => selectDay(day)}
                        >
                            <div className="day-info">
                                {day.tasks && day.tasks.length > 0 && (
                                    <span className={`completed-counter-sidebar 
                                        ${countCompletedTasks(day) === day.tasks.length
                                        ? 'full'
                                        : ''
                                    }`}>
                                        {countCompletedTasks(day)}/{day.tasks.length}
                                        {countCompletedTasks(day) === day.tasks.length && day.tasks.length > 0 && (
                                            <span className="check-icon"> ✓</span>
                                        )}
                                    </span>
                                )}
                                <div>{day.name}</div>
                            </div>

                            <button
                                className="delete_but"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    deleteDay(day.id);
                                }}
                            >
                                delete
                            </button>
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    );
};

export default SideBar;