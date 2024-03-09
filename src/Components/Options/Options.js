// Options.jsx
import React from 'react';
import './Options.css';

const Options = ({ question, checkAns, optionRefs }) => {
    return (
        <ul>
            <li ref={optionRefs[0]} onClick={(e) => checkAns(e, 1)}>{question.option1}</li>
            <li ref={optionRefs[1]} onClick={(e) => checkAns(e, 2)}>{question.option2}</li>
            <li ref={optionRefs[2]} onClick={(e) => checkAns(e, 3)}>{question.option3}</li>
            <li ref={optionRefs[3]} onClick={(e) => checkAns(e, 4)}>{question.option4}</li>
        </ul>
    );
}

export default Options;