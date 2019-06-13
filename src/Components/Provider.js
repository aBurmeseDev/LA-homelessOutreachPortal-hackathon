import React, {Component} from "react";
import { BrowserRouter, Switch, Route,Link } from "react-router-dom";
import ProviderContact from "./ProviderContact";
import ProviderForm from "./ProviderForm";
import ProviderLocation from "./ProviderLocation";


class Provider extends Component {
    state={
        component: 1,
        address:null,
        date: "",
        time: "",
        service: "",
        email: "",
        number:"",
        gender:"",
        numOfPeople:"",
        name:"",
        details:"",
        contactName:"",
        contactCompany:"",
        contactEmail:"",
        contactPhone:""

    }
    handleChange = e => {
        this.setState({
          [e.target.id]: e.target.value
        });
      };
    changeComponent=(e)=>{
        if(e.target.innerHTML ==  "Location"){
            this.setState({component:1})
        }else if(e.target.innerHTML ==  "Details"){
            this.setState({component:2})
        }else{
            this.setState({component:3})
        }
        console.log(this.state)
    }
    getLocation=(info)=>{
        this.setState({address:info})
        console.log(this.state)
    }
    nextComp = () =>{
        const {component} = this.state
        this.setState({
            component : component + 1
        })
    }
 
    render(){

    return (
        <BrowserRouter>
        <div>
        <nav>
        <div className="nav-wrapper">
          <div className="col s12">
          
                <a  className="breadcrumb" ><Link onClick={this.changeComponent}>Location</Link></a>
                <a  className="breadcrumb" ><Link onClick={this.changeComponent} >Details</Link></a>
                <a  className="breadcrumb" ><Link onClick={this.changeComponent} >Contact</Link></a>
            
          </div>
        </div>
        </nav>
        <div className="formContainer">

        </div>
            {(this.state.component == 1)
            ?<ProviderLocation  continue={this.nextComp} getAddress={this.getLocation}/>
            :((this.state.component == 2)
            ?<ProviderForm continue={this.nextComp} handleChange={this.handleChange}/>
            : <ProviderContact continue={this.nextComp} handleChange={this.handleChange}/>)}
        </div>
            </BrowserRouter>
        
                
    )}
}

export default Provider;
