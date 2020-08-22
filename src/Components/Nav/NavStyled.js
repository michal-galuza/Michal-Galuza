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
color:#eeeeee;
font-weight:bold;
text-decoration:none;
padding:5px;
border-radius:5px;
:hover{
    color:#393e46;
    box-shadow: 0 0px 15px 3px #00adb5;
    background:#00adb5;
}
`