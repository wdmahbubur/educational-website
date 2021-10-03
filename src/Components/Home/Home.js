import React, { useState, useEffect } from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import learningImage from '../../images/Online-learning.gif';
import Course from '../Course/Course';
import useCourse from '../hooks/useCourse';
import WelcomeAbout from '../WelcomeAbout/WelcomeAbout';

const Home = () => {

    const [courses] = useCourse();

    const [popularCourses, setPopularCourses] = useState([]);

    useEffect(() => {
        const ppCourse = courses.filter(course => course.rating > 4);
        setPopularCourses(ppCourse);
    }, [courses])

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
                <WelcomeAbout></WelcomeAbout>
            </div>
            <Container className="py-5">
                <Row className="my-5">
                    <Col md={12} className="text-center">
                        <h4 className="font-monospace text-light-gray">Why Choose Us</h4>
                        <h1 className="fw-bold">Post Popular <span className="text-primary">Courses</span></h1>
                    </Col>
                </Row>
                <Row xs={1} md={3} className="g-4">
                    {
                        popularCourses.map(course => <Course key={course.id} course={course}></Course>)
                    }

                </Row>
            </Container>

        </div>
    );
};

export default Home;