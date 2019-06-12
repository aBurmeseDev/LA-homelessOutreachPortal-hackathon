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
    render() {
        return (
        <div className="container">
            <Map google={this.props.google} zoom={14} style={mapStyles} initialCenter={{ lat: -1.2884, lng: 36.8233}} />
        </div>
        );
    }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyD8oYiLznkr2O3XV8XYMHqkae-EyEhtxko"
})(MapComponent);