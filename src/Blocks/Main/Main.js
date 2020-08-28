import React from 'react';
import {Wrapper ,Circle , H1 , P } from './MainStyled';
import Nav from '../../Components/Nav/Nav';
import About from '../About/About';
import Technologies from '../Technologies/Technologies';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
const Main = () => {
    return ( <Wrapper>
   
    <Nav/>
<Circle><H1>Michał Gałuza</H1><P>FRONT-END DEVELOPER</P></Circle>

<About/>
    <Technologies/>
    <Projects/>
    <Contact/>
    </Wrapper> );
}
 
export default Main;