import React, { Component } from 'react';
import logo from './logo.svg';
import japan from './japan-gates.jpeg';
import './App.css';
import NavBar from './NavBar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="photo-container">
          <div className="name-container">
            <p className="main-name">Scott Harvey</p>
          </div>
          {/* <img className="main-photo" src={japan} alt="japanImage" /> */}
            {/* <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Welcome to React</h2>
            </div> */}

            {/* <p className="App-intro">
              Hello World!

            </p> */}

        </div>

      </div>
    );
  }
}

export default App;
