import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import './Main.css'

const Main = () => {
    return (
        <div className="main">
            <Container>
                <p>Hello! I am</p>
                <h1>Nurul Hoda Nahid</h1>
                <h4>Front-End Developer</h4>
                <p className="web-programmer">Web Developer &amp; Programmer</p>
                <Nav>
                    <Nav.Link className="nav-item" href="https://drive.google.com/file/d/1kKgYFLx7ZM6O7OKwxZQWENYwwsxY_3Z5/view?usp=sharing" target="_blank" id="nav-resume">Get Resume</Nav.Link>
                    <Nav.Link className="nav-item" href="#about">About me</Nav.Link>
                </Nav>
            </Container>
        </div>
    );
};

export default Main;