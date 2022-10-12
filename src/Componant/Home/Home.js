import React from 'react';
import { Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import './Home.css'
import Subject from '../Subject/Subject';

const Home = () => {
    const subjects = useLoaderData();
    const actualsubjects = subjects.data;
    return (
        <div className='container my-4'>
            <Row xs={1} md={2} className="g-4 mt-3">
                {
                    actualsubjects.map(subject => <Subject
                        key={subject.id}
                        subject={subject}
                    ></Subject>)
                }
            </Row>
        </div>
    );
};

export default Home;