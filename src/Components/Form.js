import React, { Component } from "react";
import firebase from "../config/fbConfig.js";

import M from "materialize-css";

import { conditionalExpression } from "@babel/types";


class Form extends Component {
  state = {
    firstName: "",
    lastName: "",

    image: null,
    url:null


  };
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function() {
      const elem = document.querySelectorAll(".modal");
      const instance = M.Modal.init(elem);
    });
  }
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleImage = e => {
    const image = e.target.files[0];
    this.setState({ image: image });
  };
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
                    <input
                      className="file-path validate"
                      type="text"
                      placeholder="Upload one or more files"
                    />
                  </div>
                </div>
            </div>
            <a
              className="btn red lighten-1 col s4 right modal-trigger"
              href="#modal2"
            >
              Submit
            </a>
            <div id="modal2" class="modal">
              <div class="modal-content">
                <h4>Modal Header</h4>
                <p>A bunch of text</p>
              </div>
              <div class="modal-footer">
                <a
                  href="#!"
                  class="modal-close waves-effect waves-green btn-flat"
                >
                  Agree
                </a>
              </div>
            </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
