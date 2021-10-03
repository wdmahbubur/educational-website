import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Instructor = (props) => {
    const { name, email, website, profession, phone } = props.instructor;
    return (
        <Col>
            <Card className="h-100">
                <Card.Img variant="top" src="./Teddy-bear-rafiki.png" />
                <Card.Body className="text-center">
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{profession}</Card.Text>
                    <Card.Text>{email}</Card.Text>
                    <Card.Text>{website}</Card.Text>
                    <Card.Text>{phone}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Instructor;