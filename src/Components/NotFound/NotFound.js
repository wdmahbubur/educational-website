import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import notFound from '../../images/404-not-found.png'
const NotFound = () => {
    // Use history for go home Component
    let history = useHistory();
    // handle back to home button
    const backToHome = () => {
        history.push('/home');
    }
    return (
        // Show 404 Not Found if enter wrong url
        <Container>
            <Row className="align-items-center">
                <Col md={6}>
                    <img src={notFound} alt="" className="img-fluid" />
                </Col>
                <Col md={6}>
                    <h4 className="text-primary">This Page Is Not Found!</h4>
                    <h1 className="my-4 lh-3 fw-bold">We are very sorry for error. We <span className="text-primary">can’t find this</span> page.</h1>
                    <Button variant="primary" onClick={backToHome}>Back To Home</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default NotFound;