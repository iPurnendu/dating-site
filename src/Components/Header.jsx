import React from "react";
import websitelogo from "../Image/Website_logo.png";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from "react-router-bootstrap";
import { Col, Row } from "react-bootstrap";



export function Header() {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <Navbar fixed="top" expand="md" className="navbar-color">
                            <Container>
                                <Navbar.Brand>
                                    <img className="websitelogo align-center" src={websitelogo} />&nbsp;<span id="websitename">Cupid</span>
                                </Navbar.Brand>
                                <Navbar.Toggle aria-controls="my-nav" />
                                <Navbar.Collapse id="my-nav" className="right-aligned">
                                    <Nav className="fw-bold ">
                                        <LinkContainer to="/home" className="me-5">
                                            <Nav.Link>Home</Nav.Link>
                                        </LinkContainer>
                                        <LinkContainer to="/about" className="me-5 color-hover">
                                            <Nav.Link >About</Nav.Link>
                                        </LinkContainer>
                                        {/* <LinkContainer to="/login" className="me-5 color-hover">
                                            <Nav.Link>Sign in</Nav.Link>
                                        </LinkContainer>
                                        <LinkContainer to="/signup" className="me-5 color-hover">
                                            <Nav.Link>Sign up</Nav.Link>
                                        </LinkContainer> */}
                                        <LinkContainer to="/userlist" className="me-5 color-hover">
                                            <Nav.Link>User List</Nav.Link>
                                        </LinkContainer>
                                        <LinkContainer to="/signup" className="me-5 color-hover">
                                            <Nav.Link>Sign Up</Nav.Link>
                                        </LinkContainer>
                                    </Nav>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                    </Col>
                </Row>
            </Container>
        </>
    )
}