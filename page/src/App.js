import React, { Component } from 'react';
import Header from "./components/header";
import './App.css';
import Col from "./components/col";
import Footer from "./components/footer"
class App extends Component {
  render() {
    return (
      <div className="App">
         <div className="Side1">
         <Col/>
         </div>
         <div className="Side2">
         <Header/>
         <Footer/>
         </div>
      </div>
    );
  }
}
export default App;