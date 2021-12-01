import React, { useState } from 'react';
import { Container, Nav, Row } from 'react-bootstrap';
import ProgressBar from "./ProgressBar/ProgressBar";
import "./Skills.css"

const Skills = () => {

    const [web, setWeb] = useState(true);
    const [programming, setProgramming] = useState(false);
    const [tools, setTools] = useState(false);

    const webShow = () => {
        setWeb(true);
        setProgramming(false);
        setTools(false);
    }
    const programmingShow = () => {
        setProgramming(true);
        setWeb(false);
        setTools(false);
    }
    const toolsShow = () => {
        setTools(true);
        setWeb(false);
        setProgramming(false);
    }

    const webData = [
        { name: "REACT", bgcolor: "#d63031", completed: 88 },
        { name: "NODE", bgcolor: "#d63031", completed: 70 },
        { name: "MONGO DB", bgcolor: "#d63031", completed: 75 },
        { name: "EXPRESS JS", bgcolor: "#d63031", completed: 70 },
        { name: "HTML", bgcolor: "#d63031", completed: 98 },
        { name: "CSS", bgcolor: "#d63031", completed: 90 },
    ];
    const programmingData = [
        { name: "JavaScript", bgcolor: "#d63031", completed: 80 },
        { name: "PHP", bgcolor: "#d63031", completed: 40 }
    ];
    const toolsData = [
        { name: "GIT", bgcolor: "#d63031", completed: 88 },
        { name: "FIREBASE", bgcolor: "#d63031", completed: 85 },
        { name: "PHOTOSHOP", bgcolor: "#d63031", completed: 55 }
    ];

    return (
        <section id="skill">
            <Container>
                <div style={{ padding: '60px 0' }}>
                    <h2 className="text-center">My skills</h2>

                    <Nav style={{ marginBottom: '28px', marginTop: "50px" }} className="align-items-center main-nav">
                        <Nav.Link style={{backgroundColor: web ? '#d63031' : "#111A28", marginBottom:"5px"}} onClick={webShow} className="nav-item main-about skill-btn">Web</Nav.Link>
                        <Nav.Link style={{backgroundColor: programming ? '#d63031' : "#111A28", marginBottom:"5px"}} onClick={programmingShow} className="nav-item main-about skill-btn">Programming</Nav.Link>
                        <Nav.Link style={{backgroundColor: tools ? '#d63031' : "#111A28", marginBottom:"5px"}} onClick={toolsShow} className="nav-item main-about skill-btn">Tools</Nav.Link>
                    </Nav>
                    <Row>
                        {web && webData.map((item, idx) => (<ProgressBar key={idx} name={item.name} bgcolor={item.bgcolor} completed={item.completed}></ProgressBar>))}
                        {programming && programmingData.map((item, idx) => (<ProgressBar key={idx} name={item.name} bgcolor={item.bgcolor} completed={item.completed}></ProgressBar>))}
                        {tools && toolsData.map((item, idx) => (<ProgressBar key={idx} name={item.name} bgcolor={item.bgcolor} completed={item.completed}></ProgressBar>))}
                    </Row>
                </div>
            </Container>
        </section>
    );
};

export default Skills;