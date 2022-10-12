import React from 'react';
import { Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import './Home.css'
import Subject from '../Subject/Subject';


const Home = () => {
    const subjects = useLoaderData();
    const actualSubjects = subjects.data;
    return (
        <div>
            <div className="background-container container">
                <div className="background container">
                    
                    <h2 className='fw-bold'>Let's test your learning.</h2>
                </div>
            </div>
            <div className="container my-4">
                <Row xs={1} md={2} className="g-4 mt-3">
                    {
                        actualSubjects.map(subject => <Subject
                            key={subject.id}
                            subject={subject}
                        ></Subject>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Home;