import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const SideBar = ({ days, addDay, deleteDay}) => {
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
                    <li
                        className={`li_side ${selectedDay?.id === day.id ? 'selected' : ''}`}
                        key={day.id}
                        onClick={()=> selectDay(day)}
                    >
                        <Link to={`/day/${day.id}`}>{day.name}</Link>
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
                ))}
            </ul>
        </div>
    );
};

export default SideBar;
