import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './NavMenu.css';

const NavMenu = () => {
    return (
        <Navbar expand="lg">
  <Container>
    <Navbar.Brand className="nav-brand" href="/"><span className="nav-brand-color">N</span><span className="nav-brand-middle-color">H</span><span className="nav-brand-color">N</span></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
      <Nav className="justify-content-center align-items-center">
        <Nav.Link className="nav-item" href="#about">ABOUT</Nav.Link>
        <Nav.Link className="nav-item" href="#skill">SKILL</Nav.Link>
        <Nav.Link className="nav-item" href="#portfolio">PORTFOLIO</Nav.Link>
        <Nav.Link className="nav-item" href="#contact">CONTACT</Nav.Link>
        <Nav.Link className="nav-item" href="#blog">BLOG</Nav.Link>
        <Nav.Link className="nav-item" href="https://drive.google.com/file/d/1kKgYFLx7ZM6O7OKwxZQWENYwwsxY_3Z5/view?usp=sharing" target="_blank" id="nav-resume">RESUME</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default NavMenu;