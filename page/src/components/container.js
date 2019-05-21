import React, { Component } from 'react';
import TEST from './test.js';
import './container.css';



class CONTAINER extends Component {
   
  render() {
    return (
      <div className="container">
  
    <TEST header="Used Space" body="49/50 GB" footer="Get more space" colors="orange" icons="fas fa-clone" footicon="fas fa-exclamation-triangle"/>
    <TEST header="Revenue" body="$34,245" footer="Last 24 Hours" colors="green" icons="fas fa-home" footicon="fas fa-calendar-week"/>
    <TEST header="Fixed Issue" body="75" footer="Tracked from github" colors="red" icons="fas fa-info-circle" footicon="fas fa-github"/>
    <TEST header="Followers" body="+300" footer="Just updated" colors="blue" icons="fas fa-user" footicon="fas fa-clock"/>
   
      </div>
    );
  }
}

export default CONTAINER;
