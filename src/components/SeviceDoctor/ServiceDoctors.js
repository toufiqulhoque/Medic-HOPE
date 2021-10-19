import React from 'react';
import { Row } from 'react-bootstrap';
import useFetch from '../Hooks/useFetch';
import SingleServiceDoctor from '../SingleServiceDoctor/SingleServiceDoctor';


const ServiceDoctors = () => {
    const { doctors } = useFetch();
    return (
        <div className='container'>
            <div>
                <h2 className='py-5'>Doctor's At Your Service</h2>
            </div>
            <div className='container-fluid'>

                <Row xs={1} lg={3} className="g-3">
                    {
                        doctors.slice(0, 6).map(doctor => <SingleServiceDoctor
                            key={doctor.id}
                            doctor={doctor}
                        ></SingleServiceDoctor>)

                    }
                </Row>

            </div>

        </div>
    );
};

export default ServiceDoctors;