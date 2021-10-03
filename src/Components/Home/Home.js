import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import learningImage from '../../images/Online-learning.gif';
import aboutImage from '../../images/Online-learning-rafiki.png';
import Course from '../Course/Course';

const Home = () => {
    return (
        <div>
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <h3 className="text-primary mb-3">Start your favorite course</h3>
                        <h2 className="fw-bold w-75 fs-1 lh-3 mb-5">Now learning from anywhere, and build your <span className="text-primary">bright career.</span></h2>
                        <p className="w-75 text-dark mb-4">It has survived not only five centuries but also the leap into electronic typesetting.</p>
                        <Button variant="primary" className="p-3 fw-bold">Start Course</Button>
                    </Col>
                    <Col md={6}>
                        <img src={learningImage} alt="" />
                    </Col>
                </Row>
            </Container>
            <div className="bg-light">
                <Container>
                    <Row >
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
            </div>
            <Container>
                <Row className="mt-5 mb-3">
                    <Col md={12} className="text-center">
                        <h4 className="font-monospace text-light-gray">Why Choose Us</h4>
                        <h1 className="fw-bold">Post Popular <span className="text-primary">Courses</span></h1>
                    </Col>
                </Row>
                <Row xs={1} md={2} className="g-4">
                    <Course></Course>
                </Row>
            </Container>

        </div>
    );
};

export default Home;