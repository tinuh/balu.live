import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavLink from 'react-bootstrap/NavLink';
import { LinkContainer } from "react-router-bootstrap";
import { useState } from 'react';

function NavbarComponent() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="Navbar">
      <Navbar expanded={expanded} fixed = "top" bg="dark" expand="lg" className = "navbar-dark">
        <LinkContainer exact to = "/">
            <Navbar.Brand>Balaji Vanapamula</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <LinkContainer exact to="/" onClick={() => setExpanded(false)}><NavLink>Home</NavLink></LinkContainer>
                <LinkContainer exact to="/zoom" onClick={() => setExpanded(false)}><NavLink>Zoom</NavLink></LinkContainer>

            </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>
  );
}

export default NavbarComponent;
