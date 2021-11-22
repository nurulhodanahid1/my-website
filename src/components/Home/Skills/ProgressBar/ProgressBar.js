import React from "react";
import { Card, Col } from "react-bootstrap";

const ProgressBar = (props) => {
    const { bgcolor, completed, name } = props;

    const containerStyles = {
        height: 15,
        width: '100%',
        backgroundColor: "#e0e0de",
        borderRadius: 50,
    }

    const fillerStyles = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: bgcolor,
        borderRadius: 'inherit',
        textAlign: 'right',
    }

    const labelStyles = {
        padding: 5,
        color: 'white',
        fontWeight: 'bold'
    }

    return (
        <Col sm={6}>
            <Card style={{marginBottom: '28px', border: "1px solid #1D293A"}}>
                <Card.Body style={{backgroundColor:"#1D293A"}}>
                    <Card.Title style={{backgroundColor:"#1D293A", color:"#FFFFFF", fontWeight: '600'}}>{name}</Card.Title>
                    <div style={containerStyles}>
                        <div style={fillerStyles}>
                            <span style={labelStyles}>{`${completed}%`}</span>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ProgressBar;