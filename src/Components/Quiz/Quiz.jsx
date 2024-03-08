import React, { useRef, useState } from 'react'
import './Quiz.css'
import { data } from '../../assets/data';
import { graphcms, CREATE_USER_SCORE, PUBLISH_USER_SCORE } from '../../Graphql/Mutations';


export const Quiz = ({ onScoreSave, onQuizEnd }) => {

    let [index, setIndex] = useState(0);
    let [question, setQuestion] = useState(data[index]);
    let [lock, setLock] = useState(false);
    let [correctCounter, setCorrectCounter] = useState(0);
    let [result, setResult] = useState(false);

    let [name, setName] = useState('');

    let option1 = useRef(null);
    let option2 = useRef(null);
    let option3 = useRef(null);
    let option4 = useRef(null);

    let option_array = [option1, option2, option3, option4];

    const score = (correctCounter / data.length) * 100; // score out of 100

    const handleInputChange = (event) => {
        setName(event.target.value);
        console.log(name);
    };

    const checkAns = (e, ans) => {
        if (lock === false) {
            if (question.ans === ans) {
                e.target.classList.add("correct");
                setLock(true);
                setCorrectCounter(prev => prev + 1);
            }
            else {
                e.target.classList.add("wrong");
                setLock(true);
                option_array[question.ans - 1].current.classList.add('correct');
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
            option_array.map((option) => {
                option.current.classList.remove("wrong");
                option.current.classList.remove("correct");
                return null;
            });
        }
    }

    const reset = () => {
        setIndex(0);
        setQuestion(data[0]);
        setCorrectCounter(0);
        setLock(false);
        setResult(false);
        onQuizEnd(false);
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
            {result ? <></> : <><h2>{index + 1}. {question.question}</h2>
                <ul>
                    <li ref={option1} onClick={(e) => checkAns(e, 1)}>{question.option1}</li>
                    <li ref={option2} onClick={(e) => checkAns(e, 2)}>{question.option2}</li>
                    <li ref={option3} onClick={(e) => checkAns(e, 3)}>{question.option3}</li>
                    <li ref={option4} onClick={(e) => checkAns(e, 4)}>{question.option4}</li>
                </ul>
                <button onClick={next}> Next </button>
                <div className='index'> {index + 1} of {data.length} questions</div></>}
            {result ? <>
                <h2>Your score: {score}</h2>
                <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={handleInputChange}
                />
                <button onClick={save}>Save my score</button>
                <button onClick={reset}>Try Again</button>
            </> : <></>}
        </div>
    )
}

export default Quiz