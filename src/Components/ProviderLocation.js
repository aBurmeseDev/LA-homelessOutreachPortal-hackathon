import React, { Component } from "react";
import Map from '../Components/Map'

class ProviderLocation extends Component {
    state={
        address:null
    }
    
    continue = e =>{
        e.preventDefault();
        this.props.continue();
    }
    
 
    render() {
        return (
            <div>
                <Map getAddress={this.props.getAddress}/>
                <button class="btn waves-effect black" onClick={this.continue} type="submit" id="location" name="action">Continue
                    <i class="material-icons right">send</i>
                </button>  
            </div>
            
        )
    }
}

export default ProviderLocation;