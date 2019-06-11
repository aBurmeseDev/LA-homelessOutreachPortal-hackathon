import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Form from './components/Form'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Form} />
        </Switch>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
