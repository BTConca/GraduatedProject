import React, { Component } from "react";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export class NavbarsUser extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Khoa mat lozz</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" as="ul">
            <Nav.Link as="li">
              <Link to="/user/home">Home</Link>
            </Nav.Link>
            <Nav.Link as="li">
              <Link to="/user/courses">Courses</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavbarsUser;
