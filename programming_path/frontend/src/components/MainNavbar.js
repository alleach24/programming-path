import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function MainNavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/home">Path of Programming</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#link">My Path</Nav.Link>
            <NavDropdown title="My To-Dos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.0">Once</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Daily</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Weekly</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Monthly</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Yearly</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/tasks">View All</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/projects">My Projects</Nav.Link>
            <Nav.Link href="#link">My Network</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}