import styled from 'styled-components';



export const Wrapper=styled.div`
background: rgb(255,192,203);
background: linear-gradient(43deg, rgba(255,192,203,1) 31%, rgba(212,165,190,1) 100%);
width:100vw;
height:100vh;

display:flex ; 
justify-content:center ; 
align-items:center;
`;
export const Circle =styled.div`
width:600px;
height:600px;
background: white;
display:flex ; 
justify-content:center ; 
align-items:center;
flex-direction:column;
color:black;
border-radius:50%;

`;
export const H1=styled.h1`
font-family: 'Source Code Pro', monospace;
font-weight:normal;
`;
export const P=styled.p`
font-family: 'Indie Flower', cursive;
`;