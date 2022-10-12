import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Quiz.css'

const Quiz = () => {
    const quizs = useLoaderData();
    const question = quizs.data.questions[0].question;
    const x = quizs.data.questions;
    return (
        <div>
            {
                x.map(y => <p>{y.question}</p>)
            }
        </div>
    );
};

export default Quiz;