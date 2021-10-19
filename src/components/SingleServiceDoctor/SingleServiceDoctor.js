import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SingleServiceDoctor.css'

const SingleServiceDoctor = (props) => {
    const { id, name, mail, image, fees, category, schedule, detail } = props.doctor
    console.log(props.name)
    return (
        <Col md={3} className='p-3 ' >
            <Card className='h-100 hover-card card-border' >
                <Card.Img className='img1 p-1 ' variant="top" src={image} height='300' />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <p className='text-muted'>{category}</p>
                        <p>{detail.substring(0, 200)}</p>
                        <Link to={`/servicedetail/${id}`}>
                            <Button className='px-4 mx-3 mb-2 rounded-pill header-btn' variant="outline-info">Read More</Button>{' '}
                        </Link>
                        <p>Time: {schedule}</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default SingleServiceDoctor;