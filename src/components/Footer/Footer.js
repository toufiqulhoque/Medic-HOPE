import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { AiOutlineTwitter } from "react-icons/ai";


import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <Container>
                <Row>
                    <Col>
                        <h5>ABOUT HOPE</h5>
                        <div className='line'>____________________</div>
                        <br />
                        <br />
                        <small><p>Hope acknowledges the traditional custodians of the land on which Northern Health’s campuses are built, the Wurundjeri people, and pay our respects to elders past and present.</p></small>
                    </Col>
                    <Col>

                        <h5>USEFUL LINKS</h5>
                        <div className='line'>____________________</div>
                        <br />
                        <br />
                        <small><p>Privacy Policy</p></small>
                        <small><p>Terms of Services</p></small>
                        <small><p>Surgery & Transplank Guidep</p></small>
                        <small><p>Special Services</p></small>
                        <small><p>Sitemap</p></small>

                    </Col>
                    <Col>
                        <h5>QUICK LINKS</h5>
                        <div className='line'>____________________</div>
                        <br />
                        <br />
                        <small><p>About Us</p></small>
                        <small><p>Company History</p></small>
                        <small><p>Supply Medicine Manager</p></small>
                        <small><p>Doctor Forum</p></small>
                        <small><p>News</p></small>


                    </Col>
                    <Col>
                        <h5>TWITTER FEED</h5>
                        <div className='line'>____________________</div>
                        <br />
                        <br />
                        <p ><AiOutlineTwitter /></p>
                        <small><p>january01,2021</p></small>


                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;