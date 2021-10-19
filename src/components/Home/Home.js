import React from 'react';
import { Button } from 'react-bootstrap';
import DiginatCare from '../DigitalCare/DiginatCare';
import ServiceDoctors from '../SeviceDoctor/ServiceDoctors';


import './Home.css'
import OutstandingFacilities from './OutstandingSurvices/OutstandingFacilities';


const Home = () => {
    return (
        <div>
            <img className='img-fluid' src="https://i.ibb.co/0rGbDJq/v870-tang-36.jpg" alt="" />
            <br />
            <div className='bannar-text'>
                <h1>WE SET THE STANDARDS</h1>
                <h1>OTHERS TRY TO LIVE UP TO....</h1>
            </div>
            <Button className='px-4 mb-2 rounded-pill text-white bannar-btn' variant="info" size="lg">Contact Us</Button>{' '}
            <OutstandingFacilities></OutstandingFacilities>
            <ServiceDoctors></ServiceDoctors>
            <DiginatCare></DiginatCare>




        </div>
    );
};

export default Home;