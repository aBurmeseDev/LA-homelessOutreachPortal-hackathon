import React, { Component } from "react";
import firebase from "../config/fbConfig.js";

class Form extends Component {
  state = {
    name: "",
    lastName: "",
    image: null

  };
  handleChange = e => {

    this.setState({
      [e.target.id]: e.target.value
    });
    

  };
  handleImage = e =>{
    const image = e.target.files[0]
    this.setState({image:image})
  }
  handleSubmit = e => {
    e.preventDefault();
    const {image} = this.state
    const uploadTask = firebase.storage().ref(`images/${image.name}`).put(image);
    const requestRef = firebase.firestore().collection("requests");
    const request = {
      name: this.state.name,
      lastName: this.state.lastName
    };
    uploadTask.on('state_changed',
    (snapshot)=>{

    },(error)=>{
      console.log(error)
    },()=>{
      firebase.storage().ref('images').child(image.name).getDownloadURL().then(url=>{
        console.log(url)
      })
    })
    requestRef.add(request);
    this.setState({
      name: "",
      lastName: ""
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <form className="col s12" onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="input-field col s6">
                <input id="first_name" type="text" className="validate" onChange={this.handleChange} />
                <label htmlFor="first_name">First Name</label>
              </div>
              <div className="input-field col s6">
                <input id="last_name" type="text" className="validate" onChange={this.handleChange}/>
                <label htmlFor="last_name">Last Name</label>
              </div>
              <div className="row">
          <div className="input-field col s12">
            <textarea id="textarea2" className="materialize-textarea" data-length="120"></textarea>
            <label htmlFor="textarea2">Textarea</label>
          </div>
        </div>
              <div className="input-field col s6">
               <div className="file-field input-field">
                <div className="red btn">
                  <span>File</span>
                  <input type="file" onChange={this.handleImage} multiple />
                </div>
                <div className="file-path-wrapper">
                  <input className="file-path validate" type="text" placeholder="Upload one or more files" />
                </div>
              </div>
              </div>
              </div>
            <button className="btn red lighten-1">Create</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
