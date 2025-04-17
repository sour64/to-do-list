import React from "react";
import Task from "./Task";



const CircularProgress = ({tasks}) => {
    const countCompleted = tasks.filter(task => task.completed).length;

    const progressPercentage = tasks.length > 0
        ? Math.round((countCompleted / tasks.length) * 100) : 0;

    const radius = 16;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (progressPercentage / 100) * circumference;

    const getProgressColor = (percentage) => {
        if (percentage < 6) return '#e0e0e0';
        if (percentage < 26) return '#b82832';
        if (percentage < 51) return '#ff5100';
        if (percentage < 76) return '#f9e337';
        return '#4caf50';
    };

    const progressColor = getProgressColor(progressPercentage);

    return (
        <div className="circular-progress">
            <svg className="progress-ring" width="50" height="50">
                <circle
                    className="progress-ring-circle"
                    strokeWidth="5"
                    strokeLinecap="round"
                    fill="transparent"
                    r={radius}
                    cx="25"
                    cy="25"
                />
                <circle
                    className="progress-ring-circle progress-ring-circle--fill"
                    strokeWidth="5"
                    strokeLinecap="round"
                    fill="transparent"
                    r={radius}
                    cx="25"
                    cy="25"
                    style={{
                        strokeDasharray: circumference,
                        strokeDashoffset: offset ,
                        stroke: progressColor ,
                    }}
                />
            </svg>
            <div className="progress-text">
                {progressPercentage}%
            </div>
        </div>
    );
};

export default CircularProgress;