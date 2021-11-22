import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import "./About.css";
import nahidImg from '../../../images/nurul-hoda-nahid.JPG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';

const About = () => {
    return (
        <section id="about">
            <Container>
                <h2 className="text-center">About me</h2>
                <div style={{padding:"60px 0 0"}}>
                    <Row>
                        <Col sm={5} className="text-center justify-content-center align-content-center align-items-center">
                            <img style={{ borderRadius: "6px" }} src={nahidImg} alt="" />
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
                        <Col sm={7}>
                            <div style={{padding:"0 0 0 40px"}} className="align-items-center">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <Nav style={{ marginBottom: '28px' }} className="align-items-center main-nav">
                                <Nav.Link className="nav-item nav-resume" href="https://drive.google.com/file/d/1kKgYFLx7ZM6O7OKwxZQWENYwwsxY_3Z5/view?usp=sharing" target="_blank">Get Resume</Nav.Link>
                                <Nav.Link className="nav-item main-about" href="#skill">My Skills</Nav.Link>
                            </Nav>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    );
};

export default About;