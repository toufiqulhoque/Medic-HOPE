import React from 'react';
import { Button, Col, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdAlarmOn } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";



import './Header.css'
import useAuth from '../Hooks/useAuth';



const Header = () => {
    const { user, logOut } = useAuth()
    return (
        <div>
            <div className=' mini-background p-2'>
                <Col xs={12} lg={12}>
                    <Container>
                        <div className='d-flex'>
                            <small>Hello guest Welcome to HOPE</small>
                            <div className='ms-auto'>
                                <small className='me-5'><span className='me-2'><BsFillTelephoneFill /></span> 01777112222</small>
                                <small className='me-5'><span className='me-2'><MdAlarmOn /></span> 9am-5am</small>


                            </div>
                        </div>
                    </Container>
                </Col>
            </div>

            <Navbar bg="light" expand="lg">
                <Container >

                    <Navbar.Brand>
                        <NavLink to='/home'>
                            <img

                                alt=""
                                src="https://www.graphicsprings.com/filestorage/stencils/56cda80c439c4c2b4396dec02ca53596.png?width=500&height=500"
                                width="80"
                                height="80"
                                className="d-inline-block "
                            />
                        </NavLink>
                        <span className='test-decoration-none' style={{ color: '#76D5CB ' }}>Medic HOPE</span>

                    </Navbar.Brand>


                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0"
                            style={{ maxHeight: '200px' }}
                            navbarScroll
                        >
                            <Nav >
                                <NavLink
                                    className='nav-text-style me-3 text-decoration-none'
                                    to="/home"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "black"
                                    }}
                                >
                                    HOME
                                </NavLink>
                                <NavLink
                                    className='nav-text-style me-3 text-decoration-none'
                                    to="/alldoctors"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "black"
                                    }}
                                >
                                    All Doctors
                                </NavLink>

                                <NavLink
                                    className='nav-text-style me-3 text-decoration-none'
                                    to="/contactus"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "black"
                                    }}
                                >
                                    CONTACT US


                                </NavLink>
                                <NavLink
                                    className='nav-text-style text-decoration-none'
                                    to="/aboutus"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "black"
                                    }}
                                >
                                    About Us


                                </NavLink>

                                {
                                    user?.displayName &&
                                    <img src={user?.photoURL} className='rounded-circle ms-2' alt="" srcset="" height='50px' />
                                }


                                <div className='mx-3 usecolor mt-2'>
                                    {user?.displayName || <div>
                                        <Link to='/login'><Button className='px-4 mx-3 mb-2 rounded-pill header-btn' variant="outline-info">Login/Register</Button></Link>


                                    </div>}

                                </div>

                                {
                                    user?.email &&
                                    <Button onClick={logOut} className='px-4 mb-2 rounded-pill header-btn' variant="outline-info">LogOut</Button>}
                            </Nav>

                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>








        </div >
    );
};

export default Header;