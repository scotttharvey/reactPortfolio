import React, { Component } from 'react';
import Typing from 'react-typing-animation';

class TypedMe extends Component {

  render() {
    return (
      <Typing className="typer" speed={200} >
          Full Stack Web Developer 
          <Typing.Speed ms={200} />
      </Typing>
     );

  }
}

export default TypedMe;
