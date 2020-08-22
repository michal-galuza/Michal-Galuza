import styled from 'styled-components';

export const Wrapper = styled.div`
position:relative;
width:100%;
height:100vh;
background:#222831;
border-top:1px solid #00adb5;
display:flex;
`;
export const ContentWrapper=styled.div`
width:70%;
height:60%;
display:flex;
align-items:center;
justify-content: space-between;
align-self:center;
margin:0 auto;
font-size:18px;

`;
export const ImgWrapper=styled.div`
background:#00adb5;
width:25%;
height:100%;
border-radius:20px;
padding:20px;
color:#222831;
`
export const TextWrapper=styled.div`
position:relative;
background:#00adb5;
width:70%;
height:100%;
border-radius:20px;
padding:15px 15px 15px 5px;
color:#222831;
text-align:center;
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-between;
/*::before{
    position:absolute;
    content:'';
    top:calc(50% + 5px);
    left: 0;
    border:1px solid  #393e46;
    width:20%;
    left:45%;
    transform:translate(-50% , -50%);
}
::after{
    position:absolute;
    content:'';
    top:calc(50% - 5px);
    left: 0;
    border:1px solid  #393e46;
    width:20%;
    left:55%;
    transform:translate(-50% , -50%);
}*/
`;
export const Ul=styled.ul`
list-style:none;
color:black;
display:flex;
flex-direction:column;
align-items:center;
height:100%;
justify-content:space-between;
`;
export const Li=styled.li`
background:#222831;
color:#eeeeee;
padding:5px;
width:50%;
border-radius:5px;
`;