import React from 'react'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import PropTypes from 'prop-types'


export default function Navg(props) {
  return (
    <div>
        <Navbar bg={props.mode} expand="lg">
      <Container >
        <Navbar.Brand href="#home"className={`text-${props.textcolor}`}>{props.title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={`me-auto text-${props.textcolor}`}>
            <Nav.Link href="#home" className={`text-${props.textcolor}`}>Home</Nav.Link>
            <Nav.Link href="#link"className={` text-${props.textcolor}`}>{props.aboutText}</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
        <Form.Check 
        className={`text-${props.textcolor}`}
        type="switch"
        id="custom-switch"
        label= {`Enable ${props.textcolor} mode`}
        onClick={props.toggleMode}
        
      />
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

