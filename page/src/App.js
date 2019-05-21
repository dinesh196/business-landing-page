import React, { Component } from 'react';
import Header from "./components/header";
import './App.css';
import Col from "./components/col";
import Footer from "./components/footer"
import CONTAINER from "./components/container.js"



class App extends Component {
  render() {
    return (
      <div className="App">
         <div className="Side1">
         <Col/>
         </div>
         <div className="Side2">
         <Header/>
         <CONTAINER/>
         <Footer/>
         </div>
      </div>
    );
  }
}
export default App;