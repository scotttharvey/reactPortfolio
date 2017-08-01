import React, { Component } from 'react';


class NavBar extends Component {
  render() {
    return (
      <div className="nav">
        <div className="nav-container">
          <p className="nav-item">about</p>
          <p className="nav-item">portfolio</p>
          <p className="nav-item">experience</p>
          <p className="nav-item">contact</p>

        </div>

      </div>
    );
  }
}

export default NavBar;
