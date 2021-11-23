import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBloggerB } from '@fortawesome/free-brands-svg-icons';
import { faFootballBall, faRoad, faSwimmer } from '@fortawesome/free-solid-svg-icons';
import "./LoveToDo.css";

const LoveToDo = () => {
    const toDo = [
        { name: "Blogging", icon: faBloggerB },
        { name: "Travelling", icon: faRoad },
        { name: "Playing", icon: faFootballBall },
        { name: "Swimming", icon: faSwimmer }
    ]
    return (
        <Container>
            <div style={{ padding: '60px 0' }}>
                <h2 className="text-center">LOVE TO DO</h2>
                <Row style={{ marginTop: "60px" }}>
                    {toDo.map(todo => (
                        <Col sm={3}>
                            <Card style={{ marginBottom: '28px', border: "1px solid #1D293A" }}>
                                <Card.Body style={{ backgroundColor: "#1D293A" }}>
                                    <FontAwesomeIcon style={{ fontSize: '60px', color: '#d63031', backgroundColor: '#1D293A' }} icon={todo.icon} />
                                    <Card.Title style={{ backgroundColor: "#1D293A", color: "#FFFFFF", fontWeight: '600', fontSize: '27px', marginTop: "8px" }}>{todo.name}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </Container>
    );
};

export default LoveToDo;