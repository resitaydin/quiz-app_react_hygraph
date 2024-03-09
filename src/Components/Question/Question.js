// Question.jsx
import React from 'react';
import './Question.css';

const Question = ({ index, question }) => {
    return (
        <>
            <h2>{index + 1}. {question.question}</h2>
        </>
    );
}

export default Question;