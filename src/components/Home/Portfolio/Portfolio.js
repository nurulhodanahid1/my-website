import React, { useState } from 'react';
import { Container, Nav, Row } from 'react-bootstrap';
import PortfolioItems from './PortfolioItems/PortfolioItems';
import "./Portfolio.css";
import cruiseQueen from "../../../images/curise-queen.JPG";
import airViceAc from "../../../images/airViceAc.JPG";
import betterBuys from "../../../images/betterBuys.JPG";
import publicTransport from "../../../images/publicTransport.JPG";
import soccer from "../../../images/soccer.PNG";
import hungry from "../../../images/hungry.PNG";

const Portfolio = () => {

    const [web, setWeb] = useState(true);
    const [others, setOthers] = useState(false);
    const [linkText, setLinkText] = useState(false);

    const webShow = () => {
        setWeb(true);
        setOthers(false);
    };
    const othersShow = () => {
        setOthers(true);
        setWeb(false);
    };
    const showLinkText = () => {
        setLinkText(true)
    };
    const hideLinkText = () => {
        setLinkText(false)
    }

    const webData = [
        { name: "AirVice AC Repair", img: airViceAc, description: "Lorem didunt dolore magna", gitLink: "https://github.com/nurulhodanahid1/airvice-ac-repair-client", liveSide: "https://airvice-ac-repair.web.app/", createBy1: "Node", createBy2: "Express", createBy3: "MongoDB" },

        { name: "Better Buys", img: betterBuys, description: "Lorem didunt dolore magna", gitLink: "https://github.com/nurulhodanahid1/better-buys", liveSide: "https://better-buys-cbd4f.web.app/", createBy1: "React Router", createBy2: "MongoDB", createBy3: "Firebase" },

        { name: "Public Transport", img: publicTransport, description: "Lorem didunt dolore magna", gitLink: "https://github.com/nurulhodanahid1/public-transport", liveSide: "https://public-transport-b7b31.web.app/", createBy1: "React", createBy2: "React Router", createBy3: "React Hooks" },

        { name: "Soccer is Life", img: soccer, description: "Lorem didunt dolore magna", gitLink: "https://github.com/nurulhodanahid1/soccer-is-life", liveSide: "https://clever-lovelace-a51041.netlify.app/", createBy1: "Bootstrap", createBy2: "JavaScript", createBy3: "json" },

        { name: "Hungry Monster", img: hungry, description: "Lorem didunt dolore magna", gitLink: "https://github.com/nurulhodanahid1/hungry-monster", liveSide: "https://nurulhodanahid1.github.io/hungry-monster/", createBy1: "json", createBy2: "API", createBy3: "JavScript" },

        { name: "Cruise Queen", img: cruiseQueen, description: "Lorem didunt dolore magna", gitLink: "https://github.com/nurulhodanahid1/cruise-queen", liveSide: "https://nurulhodanahid1.github.io/cruise-queen/", createBy1: "JavaScript", createBy2: "Bootstrap", createBy3: "HTML5" },
    ];
    const othersData = [
        { name: "", img: "", description: "", gitLink: "", liveSide: "", createBy1: "", createBy2: "", createBy3: "" },
        { name: "", img: "", description: "", gitLink: "", liveSide: "", createBy1: "", createBy2: "", createBy3: "" },
    ];

    return (
        <section id="portfolio">
            <Container>
                <div style={{ padding: '60px 0' }}>
                    <h2 className="text-center">Portfolio</h2>

                    <Nav style={{ marginBottom: '28px', marginTop: "50px" }} className="align-items-center main-nav">
                        <Nav.Link style={{ backgroundColor: web && '#df0e0e' }} onClick={webShow} className="nav-item main-about portfolio-btn">Web</Nav.Link>
                        <Nav.Link style={{ backgroundColor: others && '#df0e0e' }} onClick={othersShow} className="nav-item main-about portfolio-btn">Others</Nav.Link>
                    </Nav>
                    <Row>
                        {web && webData.map((item, idx) => (<PortfolioItems key={idx} item={item}></PortfolioItems>))}
                        {others && othersData.map((item, idx) => (<PortfolioItems key={idx} item={item}></PortfolioItems>))}
                    </Row>
                </div>
                <div className="text-center mb-5 portfolio-link">
                    <a onMouseEnter={showLinkText} onMouseLeave={hideLinkText} href="https://github.com/nurulhodanahid1?tab=repositories" target="_blank" rel="noopener noreferrer">{linkText ? <span>Show More</span> : <span>More</span>}</a>
                </div>
            </Container>
        </section>
    );
};

export default Portfolio;