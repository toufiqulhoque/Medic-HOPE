import React from 'react';
import { Container, Form } from 'react-bootstrap';

const ContactUs = () => {
    return (
        <Container>
            <div className='py-5'>
                <h1>Contact Us</h1>
                <h3>Commonly Requested Information</h3>
                <ul className='digi-care'>
                    <li>Billing (866) 433–4035</li>
                    <li>Financial Counseling (415) 353-1966</li>
                    <li>Health Insurance</li>
                    <li>Information Desk (415) 353-1664</li>
                    <li>International Patients (415) 353-8489 or email ims@ucsf.edu</li>
                    <li>Lodging (415) 353-2016</li>
                    <li>Maps and Directions</li>
                    <li>Medical Records (415) 353-2221</li>
                    <li>Patient Relations (415) 353-1936 or email patient.relations@ucsf.edu</li>
                    <li>Primary Care Providers (PCP)</li>
                </ul>
                <p className='py-5'>If you still have a question about Hope Medical Center, please complete the form below. Please keep in mind that we cannot release information about patients in our hospitals and cannot give medical advice.

                    For feedback regarding your experience with Hope Medical Center, please contact Patient Relations.</p>


                <div>
                    <div className="container-fluid">
                        <div className="row main-content bg-success text-center">
                            <div className="col-md-4 text-center company__info">
                                <span className="company__logo"><h2><span className="fa fa-android"></span></h2></span>
                                <h4 className="company_title"></h4>

                            </div>
                            <div className="col-md-8 col-xs-12 col-sm-12 login_form ">
                                <div className="container-fluid">
                                    <div className="row pt-3">
                                        <h2>Contact US</h2>
                                    </div>
                                    <div className="row">
                                        <form control="" className="form-group">
                                            <div className="row">
                                                <span className="fa fa-lock"></span>
                                                <input type="email" name="email" id="email" className="form__input" placeholder="email" />
                                            </div>

                                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                                <Form.Label>Your Question</Form.Label>
                                                <Form.Control as="textarea" rows={3} />
                                            </Form.Group>





                                            <div className="row">
                                                <input type="submit" value="Submit" className="btn-1 mx-auto" />
                                            </div>
                                        </form>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </Container>

    );
};

export default ContactUs;