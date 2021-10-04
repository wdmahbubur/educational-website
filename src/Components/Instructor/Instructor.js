import { faInternetExplorer } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Instructor = (props) => {
    // Destructuring object
    const { name, email, website, profession, phone, img } = props.instructor;
    return (
        // card layout for show instructor
        <Col>
            <Card className="h-100 py-2">
                <Card.Img variant="top" src={img} className="rounded-circle w-50 h-50" />
                <Card.Body className="text-center">
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{profession}</Card.Text>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-evenly fs-5">
                    <a href={`mailto:${email}`}><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></a>
                    <a href={`https://www.${website}`} target="blank"><FontAwesomeIcon icon={faInternetExplorer}></FontAwesomeIcon></a>
                    <a href={`tel:${phone}`}><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon></a>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Instructor;