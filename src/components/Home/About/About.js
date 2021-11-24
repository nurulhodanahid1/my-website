import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import "./About.css";
import nahidImg1 from '../../../images/nurul-hoda-nahid-1.JPG';
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
                            <img style={{ borderRadius: "6px" }} src={nahidImg1} alt="" />
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
                            <p>Hello! I'm Nurul Hoda Nahid, a passionate Front-End Developer. I develop web applications. My core skill is based on JavaScript and I love to do most of the things using JavaScript. I love to make the web more open to the world. I am available for any kind of job opportunity that suits my interests.</p>
                            <Nav style={{ marginBottom: '28px' }} className="align-items-center main-nav">
                                <Nav.Link className="nav-item nav-resume" href="https://drive.google.com/file/d/1kKgYFLx7ZM6O7OKwxZQWENYwwsxY_3Z5/view?usp=sharing" target="_blank">Get Resume</Nav.Link>
                                <Nav.Link style={{backgroundColor:"#111A28"}} className="nav-item main-about" href="#skill">My Skills</Nav.Link>
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