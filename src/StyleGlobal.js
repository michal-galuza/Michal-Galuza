import {createGlobalStyle} from 'styled-components';

const StyleGlobal=createGlobalStyle`
* , *::before , *::after{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: 'Ubuntu', sans-serif;
    z-index:1;
}
body , html , #root{
    width:100%;
    background:rgb(21, 32, 43);
}
`;
export default StyleGlobal;