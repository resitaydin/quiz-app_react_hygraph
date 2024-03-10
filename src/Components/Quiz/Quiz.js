// Quiz.jsx
import React, { useState } from 'react';

import './Quiz.css';
import { data } from '../../assets/data';
import { graphcms, CREATE_USER_SCORE, PUBLISH_USER_SCORE } from '../../Graphql/Mutations';
import Result from '../Result/Result';
import Question from '../Question/Question';
import Options from '../Options/Options';

export const Quiz = ({ onScoreSave, onQuizEnd }) => {
    let [index, setIndex] = useState(0);
    let [question, setQuestion] = useState(data[index]);
    let [lock, setLock] = useState(false);
    let [correctCounter, setCorrectCounter] = useState(0);
    let [result, setResult] = useState(false);
    let [name, setName] = useState('');

    const score = (correctCounter / data.length) * 100; // score out of 100

    const handleInputChange = (event) => {
        setName(event.target.value);
        console.log(name);
    };

    let [selectedOption, setSelectedOption] = useState(null);
    let [correctOption, setCorrectOption] = useState(null);

    const checkAns = (ans) => {
        if (lock === false) {
            setSelectedOption(ans);
            if (question.ans === ans) {
                setCorrectOption(ans);
                setLock(true);
                setCorrectCounter(prev => prev + 1);
            }
            else {
                setLock(true);
                setCorrectOption(question.ans);
            }
        }
    }

    const next = () => {
        if (lock === true) {
            if (index === data.length - 1) {
                setResult(true);
                onQuizEnd(true); // notify App that the quiz has ended
                return 0;
            }
            setIndex(++index);
            setQuestion(data[index]);
            setLock(false);
            setSelectedOption(null); // reset selected option
            setCorrectOption(null); // reset correct option
        }
    }

    const reset = () => {
        setIndex(0);
        setQuestion(data[0]);
        setCorrectCounter(0);
        setLock(false);
        setResult(false);
        onQuizEnd(false);
        setSelectedOption(null); // reset selected option
        setCorrectOption(null); // reset correct option
    }

    async function save() {
        if (!name.trim()) {
            alert("Please enter your name to save the score.");
            return;
        }
        const obj = { name, score }
        const { createUserScore } = await graphcms.request(CREATE_USER_SCORE, obj); // create user with score and name
        await graphcms.request(PUBLISH_USER_SCORE, { id: createUserScore?.id }); // publish the score
        onScoreSave(); // fetch scores again after saving
    }

    return (
        <div className='container'>
            <h1>Quiz App</h1>
            <hr />
            {result ? (
                <Result
                    score={score}
                    name={name}
                    handleInputChange={handleInputChange}
                    save={save}
                    reset={reset}
                />
            ) : (
                <>
                    <Question index={index} question={question} />
                    <Options
                        question={question}
                        checkAns={checkAns}
                        selectedOption={selectedOption}
                        correctOption={correctOption}
                    />
                    <button onClick={next}> Next </button>
                    <div className='index'> {index + 1} of {data.length} questions</div>
                </>
            )}
        </div>
    );
}

export default Quiz;
