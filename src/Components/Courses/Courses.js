import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Course from '../Course/Course';
import useCourse from '../hooks/useCourse';

const Courses = () => {
    const [courses] = useCourse();
    return (
        <div>
            <div className="py-5 bg-light text-center">
                <h2>Our All Course </h2>
                <small>Home {`>`} Courses</small>
            </div>
            <Container>
                <Row xs={1} md={3} className="g-4 py-4">
                    {
                        courses.map(course => <Course key={course.id} course={course}></Course>)
                    }

                </Row>
            </Container>
        </div>

    );
};

export default Courses;