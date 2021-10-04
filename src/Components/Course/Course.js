import { faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';
import './Course.css';


const Course = (props) => {
    const { course_name, duration, img, instructor_name, price, rating, category } = props.course;
    return (
        // Show Course by card layout 
        <Col>
            <Card className="h-100">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Text className="d-flex justify-content-between align-items-center">
                        <h6 className="font-monospace">{instructor_name}</h6>
                        <h6 className="bg-primary p-2 rounded text-white">{category}</h6>
                    </Card.Text>

                    <Card.Title>{course_name}</Card.Title>

                    <Card.Text className="d-flex justify-content-between align-items-center">
                        <h6><FontAwesomeIcon icon={faClock} className="text-warning"></FontAwesomeIcon> {duration}hr</h6>
                        <div>
                            <Rating
                                initialRating={rating}
                                emptySymbol="far fa-star icon-color"
                                fullSymbol="fas fa-star icon-color"
                                readonly
                            />({rating})
                        </div>
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <h5 className="text-warning">Price: ${price}</h5>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Course;