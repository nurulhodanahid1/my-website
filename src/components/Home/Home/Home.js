import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import LoveToDo from '../LoveToDo/LoveToDo';
import Main from '../Main/Main';
import NavMenu from '../NavMenu/NavMenu';
import Portfolio from '../Portfolio/Portfolio';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <div>
            <NavMenu></NavMenu>
            <Main></Main>
            <About></About>
            <Skills></Skills>
            <LoveToDo></LoveToDo>
            <Portfolio></Portfolio>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;