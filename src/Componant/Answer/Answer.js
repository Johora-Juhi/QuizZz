import React, { useState } from 'react';
import './Answer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

const Answer = ({quiz}) => {
    const [show, setShow] = useState(false);
    return (
        <div className='quiz-question'>
            <h3>{quiz.question}</h3>
            <div className="quiz-option">
                {quiz.options.map(eachOptions =>
                    <h6>{eachOptions}</h6>
                )}
            </div>
            <div onClick={() => setShow(!show)}><FontAwesomeIcon icon={faEye} /></div>
            {show && <p>{quiz.correctAnswer}</p>}
        </div>
    );
};

export default Answer;