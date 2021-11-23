import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact">
            <Container>
                <div style={{ padding: '65px 10px 60px' }}>
                    <h2 className="text-center">contact</h2>
                    <Row style={{marginTop:"50px"}}>
                        <Col sm={6} style={{padding: "10px 40px 0 0"}}>
                            <p style={{fontSize: '17px'}}>I am interested in working with any company that thinks my skill will be helpful for them. If you are looking for someone like me, please let me know. Or you can just 'say hi' to me.</p>
                            <p className="contact-link"><a href="mailto:nurul.nahid17@gmail.com">Contact Me</a></p>
                        </Col>
                        <Col sm={6} className="contact-info" style={{padding: "10px 0px 40 0"}}>
                            <div className="email">
                                <h3>Email</h3>
                                <p>nurul.nahid17@gmail.com <span>(Recommended)</span></p>
                            </div>
                            <div className="skype">
                                <h3>Skype</h3>
                                <p>nurulhodanahid1 <span>(Always Available)</span></p>
                            </div>
                            <div className="social">
                                <h3>Social</h3>
                                <p>Facebook/Twitter - @nurulhodanahid1 <span>(Slow response)</span></p>
                            </div>
                            <div className="address">
                                <h3>Address</h3>
                                <p>Taltaly, Telihaty - 1740, Sreepur, Gazipur</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    );
};

export default Contact;