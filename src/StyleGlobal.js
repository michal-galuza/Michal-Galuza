import {createGlobalStyle} from 'styled-components';

const StyleGlobal=createGlobalStyle`
* , *::before , *::after{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: 'Ubuntu', sans-serif;
}
body , html , #root{
    width:100%;
    background: rgb(255,192,203);
background: linear-gradient(43deg, rgba(255,192,203,1) 31%, rgba(212,165,190,1) 100%);
}
`;
export default StyleGlobal;