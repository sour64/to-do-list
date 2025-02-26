import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const SideBar = ({ days, addDay, deleteDay}) => {
    const [dayName, setDayName] = useState('');

    const handleAddDay = () => {
        if (dayName.trim()) {
            addDay({ id: uuidv4(), name: dayName, tasks: [] });
            setDayName('');
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
            />
            <button className={"but_side"} onClick={handleAddDay}>add a day</button>
            <ul className={"ul_side"}>
                {days.map((day) => (
                    <li className={"li_side"} key={day.id}>
                        <Link to={`/day/${day.id}`}>{day.name}</Link>
                        <button className={"delete_but"} onClick={() => deleteDay(day.id)}>delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SideBar;
