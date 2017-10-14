import React, { Component } from 'react';
import logo from './logo.svg';
import japan from './japan-gates.jpeg';
import './App.css';
import NavBar from './NavBar';
import About from './About';
import TypedMe from './TypedMe';
import Skills from './Skills';


class App extends Component {


  render() {

    return (
      <div className="App">
        <NavBar />
        <div className="photo-container">
          <div className="name-container">
            <p className="main-name">Scott Harvey</p>
            <TypedMe />
          </div>

        </div>
        <About />
        <Skills />

      </div>
    );
  }
}

export default App;
