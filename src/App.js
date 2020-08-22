import React from 'react';
import StyleGlobal from './StyleGlobal';
import Main from './Blocks/Main/Main';
import About from'./Blocks/About/About';
import Technologies from'./Blocks/Technologies/Technologies';
import styled from 'styled-components';
import {BrowserRouter as Router  } from 'react-router-dom';
function App() {
  const Wrapper=styled(Router)`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:flex-start;
  `;
  return (
    <Wrapper>
      <>
    <StyleGlobal/>
    <Main/>
    <About/>
    <Technologies/>
    </>
   </Wrapper>
  );
}

export default App;
