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
        { name: "REACT", bgcolor: "#6a1b9a", completed: 80 },
        { name: "NODE", bgcolor: "#00695c", completed: 50 },
        { name: "MONGO DB", bgcolor: "#ef6c00", completed: 65 },
        { name: "EXPRESS JS", bgcolor: "#c0392b", completed: 70 },
        { name: "HTML", bgcolor: "#27ae60", completed: 90 },
        { name: "CSS", bgcolor: "#d35400", completed: 70 },
    ];
    const programmingData = [
        { name: "JavaScript", bgcolor: "#6a1b9a", completed: 80 },
        { name: "PHP", bgcolor: "#00695c", completed: 40 }
    ];
    const toolsData = [
        { name: "GIT", bgcolor: "#6a1b9a", completed: 80 },
        { name: "FIREBASE", bgcolor: "#00695c", completed: 70 },
        { name: "PHOTOSHOP", bgcolor: "#ef6c00", completed: 55 }
    ];

    return (
        <section id="skill">
            <Container>
                <div style={{ padding: '60px 0' }}>
                    <h2 className="text-center">My skills</h2>

                    <Nav style={{ marginBottom: '28px', marginTop: "50px" }} className="align-items-center main-nav">
                        <Nav.Link style={{backgroundColor: web && '#df0e0e'}} onClick={webShow} className="nav-item main-about skill-btn">Web</Nav.Link>
                        <Nav.Link style={{backgroundColor: programming && '#df0e0e'}} onClick={programmingShow} className="nav-item main-about skill-btn">Programming</Nav.Link>
                        <Nav.Link style={{backgroundColor: tools && '#df0e0e'}} onClick={toolsShow} className="nav-item main-about skill-btn">Tools</Nav.Link>
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