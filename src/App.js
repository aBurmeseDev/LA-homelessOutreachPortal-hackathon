import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Form from "./Components/Form";
import Home from "./Components/Home/Home";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Form} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
