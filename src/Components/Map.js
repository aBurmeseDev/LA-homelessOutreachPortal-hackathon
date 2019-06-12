import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
    width: '50%',
    height: '50%'
  };

class MapComponent extends Component {
    state={
        lat: 0,
        lng: 0,
        isMarkerShown: false
    }
    componentDidMount(){
        let lat ,long ;
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function(position) {
               lat = position.coords.latitude
               long =position.coords.longitude
            });
          } else {
            console.log('not available')
          }
        this.setState({lat:lat,lng:long})
        console.log(this.state)
    }
    render() {
        return (
        <div className="container">
            <Map google={this.props.google} zoom={14} style={mapStyles} initialCenter={{ lat: this.state.lat, lng: this.state.lng}} />
        </div>
        );
    }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyD8oYiLznkr2O3XV8XYMHqkae-EyEhtxko"
})(MapComponent);