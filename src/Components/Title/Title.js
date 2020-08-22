import React from 'react';
import styled from 'styled-components';
const H1=styled.h1`
width:300px;
position:absolute;
top:100px;
left:0px;
background:#00adb5;
font-weight:normal;
height:60px;
text-align:right;
display:flex;
align-items:center;
justify-content:flex-end;
padding-right:30px;
border-radius: 0 50px 50px 0;
color:#393e46;
box-shadow: 0 0px 15px 3px #00adb5;
`;

const Title = ({text})=>(
<H1>{text}</H1>

);
export default Title;