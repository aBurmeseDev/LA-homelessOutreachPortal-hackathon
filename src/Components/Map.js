import React, { Component } from 'react';
import { Map, GoogleApiWrapper,Marker } from 'google-maps-react';


const mapStyles = {
    width: '50%',
    height: '50%',
    located: false
  };

class MapComponent extends Component {
    state={
        latitude: null,
        longitude: null,
        isMarkerShown: false
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
  
    render() {
        console.log(this.state)
        return (
          
            <div className="container">
                <Map google={this.props.google} zoom={14} style={mapStyles}  center={{lat:this.state.latitude,lng:this.state.longitude}} >
                <Marker title={"Your Location"} name={'SOMA'} position={{lat: this.state.latitude, lng: this.state.longitude}} />
                </Map>
            </div>

        );
    }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyD8oYiLznkr2O3XV8XYMHqkae-EyEhtxko"
})(MapComponent);