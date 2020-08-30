import React from 'react';
import {Wrapper ,Circle , H1 , P, CircleWrapper } from './MainStyled';
import Nav from '../../Components/Nav/Nav';
import About from '../About/About';
import Technologies from '../Technologies/Technologies';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Skills from '../Skills/Skills';
const Main = () => {
    return ( <Wrapper>
   
    <Nav/>
    <CircleWrapper>
<Circle><H1>Michał Gałuza</H1><P>FRONT-END DEVELOPER</P></Circle>
</CircleWrapper>
<About/>
<Skills/>
    <Technologies/>
    <Projects/>
   <Contact/>
    </Wrapper> );
}
 
export default Main;