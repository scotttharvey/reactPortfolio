import React, { Component } from 'react';


class Skills extends Component {
  render() {
    return (
      <div className="skills-section">
        <h1>Skills</h1>
        <div className="skills-container">

          <div className="skill-column">
            <i className="fa fa-server fa-fw fa-1x skills-icons"/>
            <div>
              <p>Node</p>
              <p>PHP</p>
            </div>
          </div>
          <div className="skill-column">
            <i className="fa fa-code fa-fw fa-2x skills-icons"/>
            <div>
              <p>HTML 5</p>
              <p>JavaScript</p>
              <p>CSS</p>
              <p>React</p>
              <p>React Native</p>
              <p>Angular</p>
            </div>

          </div>
          <div className="skill-column">
            <i className="fa fa-database fa-fw fa-1x skills-icons"/>
            <div>
              <p>mySQL</p>
              <p>Mongo DB</p>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Skills;
