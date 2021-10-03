import React from 'react';
import { Col, Container, Form, FormControl, Row, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="bg-light pt-5 pb-1">
            <Container>
                <Row>
                    <Col md={3}>
                        <h1 className="fw-bold text-primary fs-2">Monicu.Edu</h1>
                        <p>Welcome to Monicu.Edu. Best Learning Platform</p>
                    </Col>
                    <Col md={3}>
                        <h4>Quick Links</h4>
                        <ul className="list-unstyled">
                            <li><NavLink to="/" className="nav-link">Classroom</NavLink></li>
                            <li><NavLink to="/" className="nav-link">Event</NavLink></li>
                            <li><NavLink to="/" className="nav-link">News</NavLink></li>
                            <li><NavLink to="/" className="nav-link">About</NavLink></li>
                        </ul>
                    </Col>
                    <Col md={3}>
                        <h4>Contact Us</h4>
                        <p>58 Howard Street #2 San Francisco, CA 94105
                            info@example.com
                            (+612) 2531 5600</p>
                    </Col>
                    <Col md={3}>
                        <h4>Newsletter</h4>
                        <Form>
                            <FormControl
                                type="email"
                                placeholder="Enter Your Email"
                                className="mr-2 mb-2"
                                aria-label="Email"
                            />
                            <Button variant="outline-primary">Subscribe</Button>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <hr />
                    &copy; Copyright 2021. Developed By Mahbubur Rahman
                </Row>
            </Container>
        </div>
    );
};

export default Footer;