import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

export const NavigationBar = () => {

  return (
    <>
      <Navbar expand="lg">
        <Container>
            <Navbar.Brand href="#home"><b>Pringine</b></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                {/* <Nav.Link href="#home" className='ms-5'>Home</Nav.Link> */}
                <Nav.Link href="#verify" className='ms-5'>Verify</Nav.Link>
                <Nav.Link href="#contact" className='ms-5'>Contact Us</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
