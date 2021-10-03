import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Instructor from '../Instructor/Instructor';
import WelcomeAbout from '../WelcomeAbout/WelcomeAbout';

const About = () => {

    const [instructors, setInstructors] = useState([]);
    useEffect(() => {
        fetch('./fakeUser.json')
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, [])
    return (
        <div>
            <div className="py-5 bg-light text-center">
                <h2>About Us</h2>
                <small>Home {`>`} About</small>
            </div>
            <WelcomeAbout></WelcomeAbout>
            <div className="bg-light">
                <Container className="py-5 text-center">
                    <h1 className="fw-bold">Meet Our Best <span className="text-primary">Instructor</span></h1>

                    <Row xs={1} md={3} className="g-4 mt-3">
                        {
                            instructors.map(instructor => <Instructor key={instructor.id} instructor={instructor}></Instructor>)
                        }

                    </Row>
                </Container>
            </div>
            <Container className="py-5 text-center">
                <h1 className="fw-bold">Our Valuable <span className="text-primary">Donors</span></h1>
                <div className="d-flex justify-content-around mt-5">
                    <img src="./brand-img/1.webp" alt="" />
                    <img src="./brand-img/2.webp" alt="" />
                    <img src="./brand-img/3.webp" alt="" />
                    <img src="./brand-img/4.webp" alt="" />
                    <img src="./brand-img/5.webp" alt="" />
                    <img src="./brand-img/6.webp" alt="" />

                </div>
            </Container>


        </div>
    );
};

export default About;