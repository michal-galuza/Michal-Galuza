import styled from 'styled-components';



export const Wrapper=styled.div`
width:100%;
background:rgb(21, 32, 43);
display:flex ; 
justify-content:center ; 
align-items:center;
flex-direction:column;
color:#eeeeee;
display:grid;
grid-template-columns:50% 50%;
grid-template-rows:repeat(5 , 1fr);
grid-template-areas:

"Logo Logo"
"About About"
"Tech Tech"
"Pro Pro"
"Con Con";
`;

export const Circle =styled.div`
width:600px;
height:600px;
background: #00adb5;
display:flex ; 
justify-content:center ; 
align-items:center;
flex-direction:column;
color:black;
border-radius:50%;
grid-area:Logo;
justify-self:center;
`;
export const H1=styled.h1`
font-family: 'Source Code Pro', monospace;
font-weight:normal;
color:#393e46;
font-size:3em;
`;
export const P=styled.p`
font-family: 'Indie Flower', cursive;
color:#393e46;
font-size:1.1em;
`;