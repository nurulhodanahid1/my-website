import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import './Main.css';
import nahidImg from '../../../images/nurul-hoda-nahid.JPG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Main = () => {
    return (
        <section className="main">
            <Container>
                <Row>
                    <Col sm={7}>
                        <p className="hello">Hello! I am</p>
                        <h1>Nurul Hoda Nahid</h1>
                        <h4>Front-End Developer</h4>
                        <p className="web-programmer">Web Developer &amp; Programmer</p>
                        <Nav style={{ marginBottom: '28px' }} className="align-items-center main-nav">
                            <Nav.Link className="nav-item nav-resume" href="https://drive.google.com/file/d/1kKgYFLx7ZM6O7OKwxZQWENYwwsxY_3Z5/view?usp=sharing" target="_blank">Get Resume</Nav.Link>
                            <Nav.Link className="nav-item main-about" href="#about">About me</Nav.Link>
                        </Nav>
                    </Col>
                    <Col sm={5} className="text-center justify-content-center align-content-center align-items-center">
                        <img style={{borderRadius:"6px"}} src={nahidImg} alt="" />
                        <div className="follow text-center header">
                            <h4>Follow me</h4>
                            <div className="social-icon">
                                <ul style={{ marginBottom: '28px' }}>
                                    <li><a href="http://www.github.com/nurulhodanahid1/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a></li>
                                    <li><a href="https://www.linkedin.com/in/nurulhodanahid1/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                                    <li><a href="http://www.twitter.com/nurulhodanahid1/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a></li>
                                    <li><a href="http://www.facebook.com/nurulhodanahid1/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Main;