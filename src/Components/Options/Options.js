// Options.jsx
import React from 'react';
import './Options.css';

const Options = ({ question, checkAns, selectedOption, correctOption }) => {
    const getClassName = (optionNumber) => {
        if (optionNumber === selectedOption) {
            return optionNumber === correctOption ? 'correct' : 'wrong';
        }
        if (optionNumber === correctOption) {
            return 'correct';
        }
        return '';
    };

    return (
        <ul>
            <li className={getClassName(1)} onClick={() => checkAns(1)}>{question.option1}</li>
            <li className={getClassName(2)} onClick={() => checkAns(2)}>{question.option2}</li>
            <li className={getClassName(3)} onClick={() => checkAns(3)}>{question.option3}</li>
            <li className={getClassName(4)} onClick={() => checkAns(4)}>{question.option4}</li>
        </ul>
    );
}

export default Options;