import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProviderContact from "./ProviderContact";


function Provider() {
    return (
        <BrowserRouter>
            <div className="Provider">
                <Switch>
                    <Route exact path="/provider-contact" component={ProviderContact} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}




export default Provider;