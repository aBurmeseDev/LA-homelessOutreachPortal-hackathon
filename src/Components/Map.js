import React, { Component } from 'react';
import { Map, GoogleApiWrapper,Marker } from 'google-maps-react';
import Geocode from 'react-geocode'
import SearchBar from '../Components/SearchBar'
import { GoogleComponent } from 'react-google-location' 
import Autocomplete from 'react-google-autocomplete';

Geocode.setApiKey("AIzaSyCh-X4wpp1dAcIoEZiLhOHkASJwlwnCWg4");
Geocode.enableDebug();

const API_KEY = "AIzaSyDvWu69XjuxqaUQnd8ZWDl7QEtEQUwNRFY"
const mapStyles = {
    top:"5em",
    width: '60%',
    height: '90%',
    place:null,
    position:"fixed"
    
  };
// const boxStyle ={
//     position:"relative"
// }
// const searchBoxStyle ={
//     position:"absolute",
//     zIndex: "3",
//     backgroundColor: "white",
//     left: "20em",
//     width: "30em",
//     top: "10em",
//     left: "20em"
// }


class MapComponent extends Component {
    state={
        latitude: null,
        longitude: null,
        isMarkerShown: false,
        query: '',
        place:null,
        address:null

    }
  
  

    

    setAddress =()=>{
        Geocode.fromLatLng(this.state.latitude, this.state.longitude).then(
            response => {
              console.log(response.results[0].formatted_address);
              this.setState({address:response.results[0].formatted_address})
            },
            error => {
              console.error(error);
            }
          );
        

    }

    handleChange = (e) => { 
        this.setState({ latitude: e.coordinates.lat, longitude: e.coordinates.lng, place:e.place})
        this.props.getAddress(this.state.place)
    }

    
  
    filterMarkers(e){
        e.preventDefault()
        console.log(e.target)
    }

    render() {
        return (
            <div className="container">
                <div className="row">

                   
                <GoogleComponent apiKey={API_KEY}  language={'en'} country={'country:us'} coordinates={true} onSelect={(e)=>console.log(e)} onChange={(e)=>{this.handleChange(e)}} />  


                <Map google={this.props.google} zoom={14} style={mapStyles}  center={{lat:this.state.latitude,lng:this.state.longitude}} >
                    <Marker title={"Your Location"} name={'SOMA'}  position={{lat: this.state.latitude, lng: this.state.longitude}} />
                </Map>


                </div>


                </div>
                

            

        );
    }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyD8oYiLznkr2O3XV8XYMHqkae-EyEhtxko"
})(MapComponent);