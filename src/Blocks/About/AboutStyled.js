import styled from 'styled-components';

export const Wrapper = styled.div`
position:relative;
width:100%;
height:100vh;
background:rgb(21, 32, 43);
border-top:1px solid #00adb5;
display:flex;
grid-area:About;
`;
export const ContentWrapper=styled.div`
width:1100px;
height:60%;
display:flex;
align-items:center;
justify-content: space-between;
align-self:center;
margin:0 auto;
font-size:16px;

`;

export const ImgWrapper=styled.div`

background:#222831;
width:260px;
height:100%;
border-radius:20px;
color:#00adb5;
display:flex;
justify-content:flex-start;
align-items:center;
flex-direction:column;
border:1px solid #00adb5;
font-weight:bold;
padding: 10px 0px;
`
export const TextWrapper=styled.div`
position:relative;
background:#222831;
width:400px;
height:100%;
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
`;
export const Ul=styled.ul`
list-style:none;
color:black;
display:flex;
flex-direction:column;
align-items:center;
height:100%;
width:350px;
padding:20px;
justify-content:space-between;
border:1px solid  #393e46;
border-radius:20px;
border:1px solid #00adb5;
`;
export const Li=styled.li`
background:#222831;
color:#00adb5;
padding:5px;
width:100%;
padding:15px;
border-radius:20px;
text-align:center;
font-weight:bold;
border:1px solid #00adb5;
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
