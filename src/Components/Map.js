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
    position:"absolute"
    
  };
const boxStyle ={
    position:"relative"
}
const searchBoxStyle ={
    position:"absolute",
    zIndex: "3",
    backgroundColor: "white",
    left: "20em",
    width: "30em",
    top: "10em",
    left: "20em"
}


class MapComponent extends Component {
    state={
        latitude: null,
        longitude: null,
        isMarkerShown: false,
        query: '',
        place:null

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

    componentWillUpdate(){
        Geocode.fromLatLng(this.state.latitude, this.state.longitude).then(
            response => {
              console.log(response.results[0].formatted_address);
            },
            error => {
              console.error(error);
            }
          );
    }
  
    filterMarkers(e){
        e.preventDefault()
        console.log(e.target)
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                <div className="container">



                    <div style={searchBoxStyle}>
                        <GoogleComponent apiKey={API_KEY}  language={'en'} country={'country:us'} coordinates={true} onChange={(e) => { this.setState({ latitude: e.coordinates.lat, longitude: e.coordinates.lng }) }} />  
                    </div>

                    <Map google={this.props.google} zoom={14} style={mapStyles}  center={{lat:this.state.latitude,lng:this.state.longitude}} >
                        <Marker title={"Your Location"} name={'SOMA'}  position={{lat: this.state.latitude, lng: this.state.longitude}} />
                    </Map>


                </div>

                </div>
                </div>
                

            

        );
    }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyD8oYiLznkr2O3XV8XYMHqkae-EyEhtxko"
})(MapComponent);