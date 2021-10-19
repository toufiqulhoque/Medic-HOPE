import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <Button className='px-4 mx-3 mb-2 rounded-pill header-btn ' variant="outline-info"><Link className='text-decoration-none text-black' to='/home'>Back To Home</Link></Button>{' '}
            <img className='img-fluid' src="https://i.ibb.co/swsqf9K/5224474.jpg" alt="" />
        </div>
    );
};

export default NotFound;