import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';

import Form from './Components/Form'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />

        <Switch>
          <Route exact path='/' component={Form} />
        </Switch>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
