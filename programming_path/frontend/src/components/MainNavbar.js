import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export default function MainNavbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="/home">Path of Programming</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto">
          <li class="nav-item active">
            <a class="nav-link" href="/mypath">My Path</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/projects">My Projects</a>
          </li>
          <NavDropdown title="My To-Dos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.0">Once</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Daily</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Weekly</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Monthly</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Yearly</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/tasks">View All</NavDropdown.Item>
            </NavDropdown>
          <li class="nav-item">
            <a class="nav-link" href="/resources">Resources</a>
          </li>
        </ul>
        <span class="navbar-text mr-lg">
          <a class="nav-link" href="/members/logout_user">Log Out</a>
        </span>
      </div>
    </nav>
  );
}