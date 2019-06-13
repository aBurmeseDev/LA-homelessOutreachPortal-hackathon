import React from "react";
import Map from './Map.js'

const resourceArr = [
    {category:"shelter", name:"Hope of the Valley Help Center",cordinates:{lat:34.187190,lng:-118.444780}}
   
]


class Resources extends React.Component {
 


  render() {
    return (
       <Map resources={resourceArr}/>
    );
  }
}

export default Resources