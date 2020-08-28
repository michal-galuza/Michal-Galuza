import styled from 'styled-components';
import {NavLink} from 'react-router-dom'
export const Wrapper=styled.nav`
width:100%;
height:50px;
display:flex;
justify-content:center;
align-items:center;
padding:0 50px;
position: fixed;
  top: 0;
  left:0;
  z-index:999;
background:#222831;
`;
export const NavItem=styled(NavLink)`
color:#eeeeee;
font-weight:bold;
text-decoration:none;
padding:5px;
border-radius:5px;
margin:0 15px;
:hover{
    color:#393e46;
    box-shadow: 0 0px 15px 3px #00adb5;
    background:#00adb5;
}
`