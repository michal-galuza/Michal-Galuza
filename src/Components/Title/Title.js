import React from 'react';
import styled from 'styled-components';
const H1=styled.h1`
width:400px;
position:absolute;
top:100px;
left:0px;
background:#008f7a;
font-weight:normal;
height:70px;
text-align:right;
display:flex;
align-items:center;
justify-content:flex-end;
padding-right:30px;
border-radius: 0 50px 50px 0;

`;

const Title = ({text})=>(
<H1>{text}</H1>

);
export default Title;