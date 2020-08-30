import styled from 'styled-components';

export const Wrapper = styled.div`
position:relative;
width:100%;
min-height:100vh;
background:rgb(21, 32, 43);
border-top:1px solid #00adb5;
padding:120px 0px 40px 0;
display:grid;
grid-template-columns: 300px;
    grid-template-rows: 550px 600px;
    justify-content:center;
    align-content:center;
    grid-row-gap: 30px;
@media (min-width: 670px){
    display:grid;
    grid-template-columns: 250px 350px;
    grid-template-rows: 540px;
    grid-column-gap:20px;
}
@media (min-width: 800px){
    grid-column-gap:60px;
    grid-template-columns: 250px 400px;
    }
`;

export const ImgWrapper=styled.div`
background:#222831;
border-radius:20px;
color:#00adb5;
display:flex;
justify-content:flex-start;
align-items:center;
flex-direction:column;
border:1px solid #00adb5;
font-weight:bold;
padding: 10px 0px;
width:100%;
height:100%;


`
export const TextWrapper=styled.div`
position:relative;
background:#222831;
border-radius:20px;
padding:20px;
color:#eeeeee;
text-align:center;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
border:1px solid #00adb5;
font-weight:normal;
font-style:italic;
font-size:18px;
width:100%;
height:100%;
`;
export const Img=styled.img`
width:130px;
height:150px;
border-radius:10px;
justify-self:center;
object-fit:cover;
border:6px solid #00adb5;
`;
export const P=styled.p`
margin:8px;
font-weight:normal;
`;
export const A=styled.a`
margin:8px;
color:#00adb5;
text-decoration:none;
font-weight:normal;
:hover{
    color:purple;
}
`;
export const Field=styled.fieldset`
width:100%;
border:none;
border-top:1px solid #00adb5;
margin:4px 0px;
padding:4px;
text-align:left;
display:flex;
flex-direction:column;
justify-content:space-between;
`;
export const Legend=styled.legend`
padding: 0px 9px;
`;
