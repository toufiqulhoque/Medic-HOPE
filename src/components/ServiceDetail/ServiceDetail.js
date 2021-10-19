import React, { useEffect, useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './ServiceDetail.css'


const ServiceDetail = () => {
    let { id } = useParams();
    const [servicesDetails, setServiceDetails] = useState([]);

    const [singleService, setSingleService] = useState({});

    //  data load howa
    useEffect(() => {
        fetch('/DocData.json')
            .then((res) => res.json())
            .then((data) => setServiceDetails(data));
    }, []);

    // call hbe jokon amar shob data load hye state e set hbe
    useEffect(() => {
        const foundService = servicesDetails.find(
            (service) => service.id == id
        );
        setSingleService(foundService);
    }, [servicesDetails]);


    return (
        <div>
            <Container>
                <Card className="text-center h-100 mt-4 p-md-5 m-md-5 card-border">
                    <Card.Body className='d-md-flex'>
                        <Card.Img className='feature-img img-fluid' variant="top" src={singleService?.image} height='400' />

                        <Card.Text className=''>
                            <Card.Title className="mt-5">{singleService?.name}</Card.Title>
                            <p className=' my-4'>{singleService?.category} </p>  <br />
                            {singleService?.detail} <br />
                            <p className='text-muted my-4'>{singleService?.mail} </p>
                            <Button className='px-4 mx-3 my-4 rounded-pill header-btn text-white' variant="info">Appointment Now</Button>{' '}
                            <Card.Text className="text-muted pt-2">{singleService?.schedule}</Card.Text>
                        </Card.Text>

                    </Card.Body>

                </Card>
            </Container>
        </div>
    );
};

export default ServiceDetail;