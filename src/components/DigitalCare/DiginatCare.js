import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { BsStopwatch } from "react-icons/bs";
import './DigitalCare.css'


const DiginatCare = () => {
    return (
        <div className='pt-5'>
            <Container>

                <Row className='py-5'>
                    <Col className='digi-care'>
                        <h5>DIGITAL HEALTH</h5>
                        <h2>Virtula Urgent Care</h2>
                        <p className='pt-3'>Get a diagnosis and treatment plan without leaving the comfort of home. By downloading the HOPE Connect app, you can access world-class care from the teams at Columbia and Weill Cornell Medicine. Find Your Way app will help you:</p>
                        <ul className='digital-ul'>
                            <li>Get step-by-step directions to appointments.</li>
                            <li>Locate and save your parking spot.</li>
                            <li>Find amenities and services along your way</li>
                            <li>Search for a physician or provider.</li>
                            <li>Access MyChart.</li>
                        </ul>



                    </Col>


                    <Col xs={12} md={6}>
                        <img className='img-fluid' height='600' src="http://doctaroo.fr/assets/img/benefit-no-waiting.png" alt="" />
                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default DiginatCare;