import React, { useState } from 'react';
import './Answer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Answer = ({quiz}) => {
    const [show, setShow] = useState(false);
    const showToastMessage = (myAns) => {
        if (myAns === quiz.correctAnswer) {
        toast.success('Right Answer !', {
            position: toast.POSITION.TOP_CENTER
        });
    }
    else{
        toast.error('Wrong Answer !', {
            position: toast.POSITION.TOP_CENTER
        });
    }
    };
    
    return (
        <div className='quiz-question'>
            <h3>{quiz.question}</h3>
            <div className="quiz-option">
                {quiz.options.map(eachOptions =>
                    <div>
                        <h6 onClick={() => showToastMessage(eachOptions)}>{eachOptions}</h6>
                    <ToastContainer/>
                    </div>
                )}
            </div>
            <div onClick={() => setShow(!show)}><FontAwesomeIcon icon={faEye} /></div>
            {show && <p>{quiz.correctAnswer}</p>}
        </div>
    );
};

export default Answer;