import React from 'react';
import {Wrapper , NavItem} from './NavStyled';

const Nav = () => {
    return ( <Wrapper>
        <NavItem>Start</NavItem>
        <NavItem>O mnie</NavItem>
        <NavItem>Technologie</NavItem>
        <NavItem>Portfolio</NavItem>
        <NavItem>Kontakt</NavItem>
    </Wrapper> );
}
 
export default Nav;