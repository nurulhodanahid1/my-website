import React from 'react';
import About from '../About/About';
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
        </div>
    );
};

export default Home;