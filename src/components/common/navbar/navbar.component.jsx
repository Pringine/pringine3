import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const NavigationBar = () => {

  return (
    <>
      <Navbar expand="lg" bg="" variant="dark">
        <Container>
            <Navbar.Brand as={Link} to="/" ><b>Pringine</b></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                <Nav.Link as={Link} to="/verify"  className='ms-5'>Verify</Nav.Link>
                <Nav.Link as={Link} to="/contact"  className='ms-5'>Contact Us</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
