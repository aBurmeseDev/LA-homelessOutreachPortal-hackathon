import React, { Component } from "react";
import firebase from "../config/fbConfig.js";
import { conditionalExpression } from "@babel/types";

class Form extends Component {
  state = {
    firstName: "",
    lastName: "",
    image: null,
    url:null

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
    
    const {firstName, lastName, image,url} = this.state
    if(image){
      const uploadTask = firebase.storage().ref(`images/${image.name}`).put(image);
      uploadTask.on('state_changed',
      (snapshot)=>{

      },(error)=>{
        console.log(error)
      },()=>{
        firebase.storage().ref('images').child(image.name).getDownloadURL().then(picUrl=>{
          console.log(picUrl)
          const requestRef = firebase.firestore().collection("requests");
            const request = {
              firstName: firstName,
              lastName: lastName,
              url: picUrl
            }
            console.log(request)
            requestRef.add(request);
          this.setState({
            url:picUrl
          },()=>{

          
            
          }
         )
         
        })
      })
    }


    
    
    this.setState({
      firstName: "",
      lastName: "",
      url:null
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <form className="col s12" onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="input-field col s6">
                <input id="firstName" type="text" className="validate" onChange={this.handleChange} />
                <label htmlFor="firstName">First Name</label>
              </div>
              <div className="input-field col s6">
                <input id="lastName" type="text" className="validate" onChange={this.handleChange}/>
                <label htmlFor="lastName">Last Name</label>
              </div>
              <div className="row">
          
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
