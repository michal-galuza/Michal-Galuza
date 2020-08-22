import styled from 'styled-components';

export const Wrapper = styled.div`
position:relative;
width:100%;
height:100vh;
background: rgb(214,93,177);
background: linear-gradient(37deg, rgba(214,93,177,1) 10%, rgba(255,150,113,1) 58%, rgba(249,248,113,1) 100%); 
display:flex;
`;
export const ContentWrapper=styled.div`
width:70%;
height:50%;
display:flex;
align-items:center;
justify-content: space-between;
align-self:center;
margin:0 auto;
`;
export const ImgWrapper=styled.div`
background:white;
width:25%;
height:100%;
border-radius:20px;
box-shadow:0 2px 1px 1px lightgrey;
`
export const TextWrapper=styled.div`
background:white;
width:70%;
height:100%;
border-radius:20px;
box-shadow:0 2px 1px 1px lightgrey;
padding:20px;
`