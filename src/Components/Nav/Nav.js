import React from 'react';
import {Wrapper , NavItem} from './NavStyled';

const Nav = () => {
    return ( <Wrapper>
        <NavItem to="/">Start</NavItem>
        <NavItem to="/">O mnie</NavItem>
        <NavItem to="/">Technologie</NavItem>
        <NavItem to="/">Portfolio</NavItem>
        <NavItem to="/">Kontakt</NavItem>
    </Wrapper> );
}
 
export default Nav;