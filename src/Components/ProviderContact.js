import React, { Component } from "react";


class ProviderContact extends Component {
    continue = e =>{
        e.preventDefault();
        this.props.continue();
    }
    render() {
        const {handleChange} = this.props
        return (

            <div>
            <div>3 Contact</div>
            <h1>Provider Contact</h1>
                <div class="row">
                <div class="input-field col s6">
                    <input id="contactName" onChange={handleChange} type="text" class="validate" />
                    <label class="active" for="contactName">Your Name</label>
                </div>
                <div class="input-field col s6">
                    <input id="contactCompany" onChange={handleChange} type="text" class="validate" />
                    <label class="active" for="company">Company/Affiliation</label>
                </div>
                <div class="input-field col s6">
                    <input id="contactEmail" onChange={handleChange} type="text" class="validate" />
                    <label class="active" for="company">Email</label>
                </div>
                <div class="input-field col s6">
                    <input id="contactPhone" onChange={handleChange} type="text" class="validate" />
                    <label class="active" for="company">Phone</label>
                </div>
                </div>
                <button class="btn waves-effect black" onClick={this.props.handleSubmit} type="submit" id="location" name="action">Sumbit<i class="material-icons right">send</i> </button>
            </div>

        )
    }
}

export default ProviderContact;
