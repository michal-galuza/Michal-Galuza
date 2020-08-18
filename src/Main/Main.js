import React from 'react';
import {Wrapper ,Circle , H1 , P} from './MainStyled';
import Nav from '../Components/Nav/Nav';
const Main = () => {
    return ( <Wrapper>
    <Nav/>
<Circle><H1>Michał Gałuza</H1><P>FRONT-END DEVELOPER</P></Circle>
    </Wrapper> );
}
 
export default Main;