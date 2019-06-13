import React, { Component } from "react";

class ProviderContact extends Component {
    continue = e =>{
        e.preventDefault();
        this.props.continue();
    }
    render() {
        return (
            <div className="container">
                <h1>Provider Contact</h1>
                <button class="btn waves-effect black" onClick={this.continue} type="submit" id="location" name="action">Sumbit
                        <i class="material-icons right">send</i>
                </button>
            </div>
        )
    }
}

export default ProviderContact;