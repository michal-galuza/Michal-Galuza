import styled from 'styled-components';



export const Wrapper=styled.main`
width:100%;
min-height:100vh;
background:rgb(21, 32, 43);
color:#eeeeee;
`;

export const Circle =styled.div`
width:300px;
height:300px;
background: #00adb5;
display:flex ; 
justify-content:center ; 
align-items:center;
flex-direction:column;
color:black;
border-radius:50%;
grid-area:Logo;
z-index:200;
text-align:center;
@media (min-width: 500px){
    width:400px;
height:400px;
}
@media (min-width: 700px){
    width:600px;
height:600px;
}
`;
export const CircleWrapper=styled.div`
width:100%;
height:100vh;
display:flex;
justify-content:center;
align-items:center;
`;
export const H1=styled.h1`
font-family: 'Source Code Pro', monospace;
font-weight:normal;
color:#393e46;
font-size:2em;
@media (min-width: 700px){
    font-size:3em;
}
`;
export const P=styled.p`
font-family: 'Indie Flower', cursive;
color:#393e46;
font-size:1.1em;
`;