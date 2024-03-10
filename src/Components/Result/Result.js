import React from 'react';
import './Result.css';

const Result = ({ score, name, handleInputChange, save, reset }) => {
    return (
        <>
            <h2>Your score: {score}</h2>
            <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={handleInputChange}
            />
            <button onClick={save}>Save my score</button>
            <button onClick={reset}>Try Again</button>
        </>
    );
}

export default Result;