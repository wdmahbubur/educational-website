import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import aboutImage from '../../images/Online-learning-rafiki.png';


const WelcomeAbout = () => {
    return (
        // Welcome about component using in the multiple component
        <Container>
            <Row>
                <Col md={12} className="text-center pt-5">
                    <h4 className="font-monospace text-light-gray">Monicu.Edu Is The Best Learning Platform</h4>
                    <h1 className="fw-bold">Welcome to <span className="text-primary">Monicu.Edu</span></h1>
                </Col>
            </Row>
            <Row className="align-items-center">
                <Col md={6}>
                    <img src={aboutImage} alt="" className="img-fluid" />
                </Col>
                <Col md={6}>
                    <h2>Welcome to <span className="text-primary">Monicu</span> as a Best Learning Platform</h2>
                    <p className="my-4 lh-3">We understand that each of our students is a uniquely talented individual. Within our supportive community, students are facilitated to develop positive relationships and grab the opportunity to realize their individual potential to the full.</p>
                    <Button variant="primary">Learn More</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default WelcomeAbout;