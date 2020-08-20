import styled from 'styled-components';
import {NavLink} from 'react-router-dom'
export const Wrapper=styled.nav`
width:600px;
height:70px;
display:flex;
justify-content:space-between;
align-items:center;
padding:0 50px;

`;
export const NavItem=styled(NavLink)`
color:black;
font-weight:bold;
text-decoration:none;
:hover{
    color:purple;
}
`