import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import ProviderContact from "./ProviderContact";
import ProviderForm from "./ProviderForm";
import ProviderLocation from "./ProviderLocation";

function Provider() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <div className="nav-wrapper">
            <div className="col s12">
              <a className="breadcrumb">
                <Link to={`/report/provider-location`}>Location</Link>
              </a>

              <a className="breadcrumb">
                <Link to={`/report/provider-form`}>Details</Link>
              </a>

              <a className="breadcrumb">
                <Link to={`/report/provider-contact`}>Contact</Link>
              </a>
            </div>
          </div>
        </nav>

        <Switch>
          <Route
            exact
            path="/report/provider-contact"
            component={ProviderContact}
          />
          <Route exact path="/report/provider-form" component={ProviderForm} />
          <Route
            exact
            path="/report/provider-location"
            component={ProviderLocation}
          />
        </Switch>
        </div>
        </BrowserRouter>
        
                
    )
}

export default Provider;
