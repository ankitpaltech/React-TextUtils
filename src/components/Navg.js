import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import PropTypes from 'prop-types'


export default function Navg(props) {
  return (
    <div>
        <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">{props.title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">{props.aboutText}</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
    </div>
  )
}

Navg.prototype = {
    title : PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired};

Navg.defaultProps = {
    title : "set title",
    aboutText : "set about"
};

