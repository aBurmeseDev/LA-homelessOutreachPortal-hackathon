import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import MapComponent from "./Components/Map";
import Resources from "./Components/Resources"
import Form from "./Components/Form";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import ProviderForm from "./Components/ProviderForm";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div
          style={{
            display: "block",
            backgroundColor: "#ff3300",
            textAlign: "center",
            height: "4rem",
            padding: "1.5rem 0",
            backgroundColor: "#030303"
          }}
          className="hide-on-med-and-up"
        >
          <a
            href="/"
            style={{
              color: "white",
              cursor: "pointer"
            }}
          >
            LA-HOP
          </a>
        </div>
        <NavBar />

        <Switch>
          <Route exact path="/maps" component={Resources} />
          <Route exact path="/request" component={Form} />
          <Route exact path="/report" component={ProviderForm} />
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
