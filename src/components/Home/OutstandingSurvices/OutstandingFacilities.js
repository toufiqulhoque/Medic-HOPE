import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

const OutstandingFacilities = () => {
    return (
        <div className='pt-4'>
            <h4>WE CARE ABOUT PATIENT</h4>
            <h2>OUR OUTSTANDING FACILITIES</h2>
            <Container>
                <Row className='py-5'>
                    <Col xs={12} md={4}>
                        <img src="https://www.massgeneral.org/assets/MGH/images/_global/homepage/massgeneral-homepage_research.png" alt="" />
                        <h3>We bridge innovation science with state-of-the-art clinical medicine.</h3>
                        <Button className='px-5  mt-2 rounded-pill header-btn' variant="outline-info">See More</Button>{' '}
                    </Col>
                    <Col xs={12} md={4}>
                        <img src="https://www.massgeneral.org/assets/MGH/images/_global/homepage/massgeneral-homepage_education.png" alt="" />
                        <h3>Discover the ways we're training the next generation of doctors and researchers.</h3>
                        <Button className='px-5  mt-2 rounded-pill header-btn' variant="outline-info">See More</Button>{' '}
                    </Col>
                    <Col xs={12} md={4}>
                        <img src="https://www.massgeneral.org/assets/MGH/images/_global/homepage/massgeneral-homepage_community.png" alt="" />
                        <h3>Learn about Mass General's service within greater Boston and around the world.</h3>
                        <Button className='px-5  mt-2 rounded-pill header-btn' variant="outline-info">See More</Button>{' '}
                    </Col>
                </Row>
                <Row className='pb-3'>
                    <Col xs={12} md={4}>
                        <img height='120' src="https://www.massgeneral.org/assets/MGH/images/icons/MassGeneral_Icon_Accessible.svg" alt="" />
                        <h3>How we help people access care regardless of hearing, sight, mobility, or language spoken.</h3>
                        <Button className='px-5  mt-2 rounded-pill header-btn' variant="outline-info">See More</Button>{' '}
                    </Col>
                    <Col xs={12} md={4}>
                        <img height='120' src="https://www.massgeneral.org/assets/MGH/images/icons/MassGeneral_Icon_Insurance-And-Billing.svg" alt="" />
                        <h3>Find information about Massachusetts General Hospital's billing .</h3>
                        <Button className='px-5  mt-2 rounded-pill header-btn' variant="outline-info">See More</Button>{' '}
                    </Col>
                    <Col xs={12} md={4}>
                        <img height='120' src="https://www.massgeneral.org/assets/MGH/images/icons/MassGeneral_Icon_International-Patients.svg" alt="" />
                        <h3>Full-service, multilingual staff dedicated to coordinating all aspects of your journey.</h3>
                        <Button className='px-5  mt-2 rounded-pill header-btn' variant="outline-info">See More</Button>{' '}
                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default OutstandingFacilities;