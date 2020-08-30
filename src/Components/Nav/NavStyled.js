import styled from 'styled-components';
import {NavLink} from 'react-router-dom'
export const Wrapper=styled.nav`
width:99.2vw;
height:50px;
display:flex;
justify-content:center;
align-items:center;
padding:0  40vw 0 0;
position: sticky;
  top: -1px;
  z-index:100;
  background: rgb(21,32,43);
grid-area:Nav;
@media (max-width:2000px){
   display:none;
}
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