import React from "react";
import { BrowserRouter, Switch, Route,Link } from "react-router-dom";
import ProviderContact from "./ProviderContact";
import ProviderForm from "./ProviderForm";
import ProviderLocation from "./ProviderLocation";


function Provider() {
    return (
     
        <div>
        <nav>
        <div class="nav-wrapper">
          <div class="col s12">
          
                <a  class="breadcrumb">>Location</a>
                <a  class="breadcrumb"><Link to={`/report/provider-form`} >Details</Link></a>
                <a  class="breadcrumb"><Link to={`/report/provider-contact`} >Contact</Link></a>
            
          </div>
        </div>
      </nav>
      <BrowserRouter>
        <Switch>
            <Route exact path="/report/provider-contact" component={ProviderContact} />
            <Route exact path="/report/provider-form" component={ProviderForm} />
            <Route exact path="/report/provider-location" component={ProviderLocation} />
        </Switch>
        </BrowserRouter>
        </div>
                
    )
}




export default Provider;