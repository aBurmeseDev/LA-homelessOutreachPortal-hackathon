import React, { Component } from "react";


class Contact extends Component {

    componentDidMount() {

    }    

    render() {
        return (
            <div className="row">
                <form className="col s12">
                    <div>Hello World</div>
                    {/* <div className="input-field col s12">
                        <select>
                            <option value="" disabled selected>What can we help you with?</option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                            <option value="4">Option 4</option>
                        </select>
                    </div> */}
                    {/* <div className="row">
                        <div className="input-field col s6">
                            <input type="text" id="firstName" placeholder="First Name" className="validate">
                                <label htmlFor="textarea1">First Name</label>
                            </input>
                        </div>
                    </div> */}
                </form>
            </div>
        )
    }
}

export default Contact;