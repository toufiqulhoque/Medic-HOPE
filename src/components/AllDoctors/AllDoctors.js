import React from 'react';

import { Row } from 'react-bootstrap';
import useFetch from '../Hooks/useFetch';
import SingleServiceDoctor from '../SingleServiceDoctor/SingleServiceDoctor';

const AllDoctors = () => {
    const { doctors } = useFetch();
    return (


        <div className='container'>
            <div>
                <h2 className='py-5'>Find A Doctor</h2>
            </div>
            <div className='container-fluid'>

                <Row xs={1} lg={3} className="g-3">
                    {
                        doctors.map(doctor => <SingleServiceDoctor
                            key={doctor.id}
                            doctor={doctor}
                        ></SingleServiceDoctor>)

                    }
                </Row>

            </div>

        </div>
    );

};

export default AllDoctors;