import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "./Footer.css"

const Footer = () => {
    return (
        <footer id="footer">
            <Container style={{ backgroundColor: "#1D293A" }}>
                <div className="half-width" style={{ backgroundColor: "#1D293A" }}>
                    <span style={{ backgroundColor: "#1D293A" }}>ধন্যবাদ </span>
                    <span style={{ backgroundColor: "#1D293A" }}>THANKS </span>
                    <span style={{ backgroundColor: "#1D293A" }}>شکریہ </span>
                    <span style={{ backgroundColor: "#1D293A" }}>ਧੰਨਵਾਦ </span>
                    <span style={{ backgroundColor: "#1D293A" }}>धन्यवाद</span>
                </div>
                <div className="half-width" style={{ backgroundColor: "#1D293A" }}>
                    <p className="text-center" style={{ backgroundColor: "#1D293A" }}><small style={{ backgroundColor: "#1D293A" }}>Copyright &copy; {new Date().getFullYear()} Nurul Hoda Nahid</small></p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;