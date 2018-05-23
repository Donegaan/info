import React, { Component } from 'react';
import github from '../images/GitHub-Mark-64px.png'
import linkedin from '../images/linkedin.png'
import cv from '../images/cv.png'

class Welcome extends Component {
  render() {
    return (
      <div className="Welcome section">
        <h1 className="welcome-intro"><strong>Andrew Donegan</strong></h1>
        <br />
        <a href="https://github.com/Donegaan" >
          <img src={github} hspace="20" />
        </a>
        < a href="https://www.linkedin.com/in/andrew-donegan-6a3514152/">
          <img src={linkedin} />
        </a>
        <a href="">
          <img src={cv} hspace="20"/>
        </a>
      </div>
    );
  }
}
export default Welcome;