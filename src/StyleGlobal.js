import {createGlobalStyle} from 'styled-components';

const StyleGlobal=createGlobalStyle`
* , *::before , *::after{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
body , html , #root{
    width:100%;
}
`;
export default StyleGlobal;