import React from 'react';
import './Login.css'
import { Button, Form } from 'react-bootstrap';

import useAuth from '../Hooks/useAuth';
import { useHistory } from 'react-router';



const Login = () => {
    let history = useHistory();
    const { user, error, loginWithGoogle, logOut, handleResetPassword, verifyEmail, setUserName, registerNewUser, processLogin, handleRegistration, handlePasswordChange, handleEmailChange, handleNameChange, toggleLogin, isLogin } = useAuth();

    if (user?.emailVerified == true) {
        history.push('/home');
    }
    return (


        <div className='container mx-auto p-5 w-50'>
            <h3>Please {isLogin ? 'Login' : 'Register'}</h3>
            <Form onSubmit={handleRegistration}>
                {!isLogin && <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control required onBlur={handleNameChange} type="text" placeholder="Enter User Name" />
                </Form.Group>}

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control required onBlur={handleEmailChange} type="email" placeholder="Enter email" />
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control required type="password" onBlur={handlePasswordChange} placeholder="Password" />
                    <Form.Text className="text-muted">
                        Never share your password with anyone else.
                    </Form.Text> <br />
                    <Form.Text className="text-danger">
                        {error}
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onChange={toggleLogin} type="checkbox" label="Already Registered?" className='text-start' />
                </Form.Group>
                <Button variant="outline-primary" type="submit">
                    {isLogin ? 'Login' : 'Register'}
                </Button>

                <Button onClick={handleResetPassword} variant="outline-danger ms-5" size="sm">Reset Password</Button>
            </Form>
            <hr className="my-4" />

            <h6 className="card-title text-center fs-5">Or {isLogin ? 'Login' : 'Register'}</h6>
            <Button className="btn btn-lg btn-google btn-block btn-danger text-uppercase" onClick={loginWithGoogle} ><span className='text-white'>Using Google</span></Button>

        </div>


    );
}





export default Login;