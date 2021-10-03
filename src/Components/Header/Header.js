import React from 'react';
import { Form, FormControl, Nav, Navbar, Button, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        // Bootstrap navbar 
        <Navbar bg="primary" className="position-sticky top-0 w-100 px-3" expand="lg">
            <Container>
                <Navbar.Brand href="#" className="fw-bold text-white fs-2">Monicu.Edu</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" className="justify-content-between">
                    {/* Navigation Link */}
                    <Nav
                        className="mr-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <NavLink to="/home" activeClassName="nav-item-link-active" className="nav-item-link" >
                            Home
                        </NavLink>
                        <NavLink to="/courses" activeClassName="nav-item-link-active" className="nav-item-link">
                            Courses
                        </NavLink>
                        <NavLink to="/about" activeClassName="nav-item-link-active" className="nav-item-link">
                            About
                        </NavLink>
                        <NavLink to="/contact" activeClassName="nav-item-link-active" className="nav-item-link">
                            Contact
                        </NavLink>

                    </Nav>
                    {/* Search Course */}
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search Course"
                            className="mr-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-light">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;