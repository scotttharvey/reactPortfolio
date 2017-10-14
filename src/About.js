import React, { Component } from 'react';


class About extends Component {
  render() {
    return (
      <div className="about-section">
        <h1>What I Like</h1>
        <div className="like-container">
          <div className="item">
            <i className="fa fa-plane fa-fw fa-1x about-icons"/>
            <h3>Travel</h3>
            <p>Love experiencing new parts of the world </p>
          </div>

          <div className="item">
            <i className="fa fa-cutlery fa-fw fa-1x about-icons"/>

            <h3>Cooking</h3>
            <p>I like cooking, but i love eating</p>
          </div>

          <div className="item">
            <i className="fa fa-code fa-fw fa-1x about-icons"/>
            <h3>Code</h3>
            <p>I love the challenge of solving problems, and seeing my creations come to life</p>
          </div>

          <div className="item">
            <div className="about-lift about-icons"/>
            <h3>Lifting</h3>
            <p>Staying in shape is a big deal to me. I think a healthy body is the first step to a healthy life</p>
          </div>
        </div>



      </div>
    );
  }
}

export default About;
