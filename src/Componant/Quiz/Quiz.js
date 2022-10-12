import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Answer from '../Answer/Answer';
import './Quiz.css'

const Quiz = () => {
    const quizs = useLoaderData();
    const x = quizs.data.questions;
    return (
        <div className='container'>
            <div className="quizes">
                {
                    x.map(quiz =>
                        <Answer
                            quiz={quiz}
                        ></Answer>
                    )
                }
            </div>
        </div>
    );
};

export default Quiz;