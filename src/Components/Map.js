import React, { Component } from 'react';
import { Map, GoogleApiWrapper,Marker } from 'google-maps-react';
import Geocode from 'react-geocode'
import SearchBar from '../Components/SearchBar'
import { GoogleComponent } from 'react-google-location' 

Geocode.setApiKey("AIzaSyCh-X4wpp1dAcIoEZiLhOHkASJwlwnCWg4");
Geocode.enableDebug();

const mapStyles = {
    width: '50%',
    height: '50%',
    located: false,
    place:null
  };

class MapComponent extends Component {
    state={
        latitude: null,
        longitude: null,
        isMarkerShown: false,
        query: ''

    }
  
    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            (position) =>{  this.setState({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                lacated: true
              });
            }
        );
        
    }
  
    componentDidUpdate(){
        Geocode.fromLatLng(this.state.latitude, this.state.longitude).then(
            response => {
              console.log(response.results[0].formatted_address);
            },
            error => {
              console.error(error);
            }
          );

    }
    render() {
        console.log(this.state)
        return (
          
            <div className="container">
                <GoogleComponent apiKey={"AIzaSyCh-X4wpp1dAcIoEZiLhOHkASJwlwnCWg4"} language={'en'} country={'country:us'} coordinates={true} onChange={(e) => { this.setState({ place: e }) }} />
                <Map google={this.props.google} zoom={14} style={mapStyles}  center={{lat:this.state.latitude,lng:this.state.longitude}} >
                <Marker title={"Your Location"} name={'SOMA'}  position={{lat: this.state.latitude, lng: this.state.longitude}} />
                </Map>
            </div>

        );
    }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyD8oYiLznkr2O3XV8XYMHqkae-EyEhtxko"
})(MapComponent);