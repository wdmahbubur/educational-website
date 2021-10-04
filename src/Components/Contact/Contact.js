import { faArrowCircleRight, faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import './Contact.css'

const Contact = () => {
    return (
        <div>
            {/* Top Section */}
            <section className="py-5 bg-light text-center">
                <h2>Contact Us</h2>
                <small>Home {`>`} Contact</small>
            </section>

            <Container className="py-5">
                <Row className="gx-5">
                    {/* Contact information */}
                    <Col md={4} className="bg-primary p-5 rounded shadow">
                        <Row className="align-items-bottom justify-content-evenly">
                            <Col xs={2} className="bg-white text-primary rounded-circle fs-3 d-flex justify-content-center align-items-center contact-icon">
                                <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                            </Col>
                            <Col xs={10}>
                                <h4 className="text-white mt-2">Phone</h4>
                                <h6 className="text-white mt-2">(+612) 2531 5600</h6>
                            </Col>
                        </Row>
                        <hr className="text-white" />
                        <Row className="align-items-bottom justify-content-evenly">
                            <Col xs={2} className="bg-white text-primary rounded-circle fs-3 d-flex justify-content-center align-items-center contact-icon">
                                <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                            </Col>
                            <Col xs={10}>
                                <h4 className="text-white mt-2">Email</h4>
                                <h6 className="text-white mt-2">info@monicu.edu</h6>
                            </Col>
                        </Row>
                        <hr className="text-white" />
                        <Row className="align-items-bottom justify-content-evenly">
                            <Col xs={2} className="bg-white text-primary rounded-circle fs-3 d-flex justify-content-center align-items-center contact-icon">
                                <FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon>
                            </Col>
                            <Col xs={10}>
                                <h4 className="text-white mt-2">Address</h4>
                                <h6 className="text-white mt-2">New York, USA</h6>
                            </Col>
                        </Row>
                    </Col>
                    {/* Send Message */}
                    <Col md={8} className="">
                        <h2>Get in Touch</h2>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Your Name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter Your Email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                                <Form.Label>Subject</Form.Label>
                                <Form.Control type="text" placeholder="Enter Your Subject" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <Button variant="primary">Send <FontAwesomeIcon icon={faArrowCircleRight}></FontAwesomeIcon></Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contact;