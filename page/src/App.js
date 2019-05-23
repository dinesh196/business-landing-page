import React, { Component } from 'react';
import Header from "./components/header";
import './App.css';
import Col from "./components/col";
import Footer from "./components/footer"
import CONTAINER from "./components/container.js"
import CONTAINER1 from "./components/container1";
import Container2 from "./components/container2";



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
         <CONTAINER1/>
         <Container2 />
         <Footer/>
         </div>
      </div>
    );
  }
}
export default App;