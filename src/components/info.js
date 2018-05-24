import React, { Component } from 'react';
import github from '../images/GitHub-Mark-64px.png'
import linkedin from '../images/linkedin.png'
import cv from '../images/cv.png'

class Welcome extends Component {
  render() {
    return (
      <div className="info-container">
        <h1>Andrew Donegan</h1>
        <br />
        <a href="https://github.com/Donegaan" >
          <img src={github} hspace="10" alt="github"/>
        </a>
        < a href="https://www.linkedin.com/in/andrew-donegan-6a3514152/">
          <img src={linkedin} hspace="10"alt="linkedin"/>
        </a>
        <a href="https://donegaan.github.io/cv.pdf" target="_blank" rel="noopener noreferrer">
          <img src={cv} hspace="10"alt="cv"/>
        </a>
      </div>
    );
  }
}
export default Welcome;