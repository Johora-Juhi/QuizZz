import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Subject.css'

const Subject = ({subject}) => {
    const { id, name, logo,total } = subject;
    return (
        <Col>
        <Card className='pt-4 pb-0 bg-light'>
            <Card.Img style={{ width: '25%', margin: '0 auto' }} variant="top" src={logo} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                
                <Link to={`/quiz/${id}`}><Button className='w-100 bg-secondary border border-dark'>Start Practice</Button></Link>
            </Card.Body>
        </Card>
    </Col>
    );
};

export default Subject;