import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import "./PortfolioItems.css"

const PortfolioItems = (props) => {
    const { name, img, description, gitLink, liveSide, createBy1, createBy2, createBy3 } = props.item;
    return (
        <Col id="portfolio-items" sm={4}>
            <Card style={{ marginBottom: '28px', border: "1px solid #1D293A", backgroundColor: "#1D293A"}}>
                <Card.Img variant="top" src={img} />
                <Card.Body style={{ backgroundColor: "#1D293A" }}>
                    <Card.Title style={{ backgroundColor: "#1D293A", color: "#FFFFFF",fontSize:"25px", fontWeight: '700' }}>{name}</Card.Title>
                    <Card.Text>
                        <p style={{ backgroundColor: "#1D293A" }}>{description}</p>
                        <div className="portfolio-link-icon">
                            <ul>
                                <li><a href={gitLink} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon style={{ backgroundColor: "#1D293A" }} icon={faGithub} /></a></li>
                                <li><a href={liveSide} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon style={{ backgroundColor: "#1D293A" }} icon={faExternalLinkAlt} /></a></li>
                            </ul>
                        </div>
                    </Card.Text>
                </Card.Body>
                <p style={{backgroundColor: "#1D293A", margin:"-6px 0 0 17px"}}><small style={{color:"#899099", backgroundColor:"#1D293A", fontSize:"15px"}}><span style={{marginRight:"11px", backgroundColor:"#1D293A"}}>{createBy1}</span> <span style={{marginRight:"11px", backgroundColor:"#1D293A"}}>{createBy2}</span> <span style={{ backgroundColor:"#1D293A"}}>{createBy3}</span></small></p>
            </Card>
        </Col>
    );
};

export default PortfolioItems;