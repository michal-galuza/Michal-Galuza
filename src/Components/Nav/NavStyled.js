import styled from 'styled-components';
import {NavLink} from 'react-router-dom'
export const Wrapper=styled.nav`
width:600px;
height:70px;
display:flex;
justify-content:center;
align-items:baseline;
`;
export const NavItem=styled(NavLink)`
color:white;
font-weight:bold;
`