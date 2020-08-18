import React from 'react';
import StyleGlobal from './StyleGlobal';
import Main from './Main/Main';
import {BrowserRouter as Router , Route , Switch } from 'react-router-dom';
function App() {
  return (
    <Router>
    <StyleGlobal/>
    <Switch>
   
   <Route exact path="/" component={Main}/>
   </Switch>
   </Router>
  );
}

export default App;
