import React, { Component } from 'react';
import github from '../images/GitHub-Mark-Light-64px.png'
import linkedin from '../images/linkedinW.png'
import cv from '../images/cv.png'

class Welcome extends Component {
  render() {
    return (
      <div className="info-container">
        <h1>Andrew Donegan</h1>
        <br />
        
        < a href="https://www.linkedin.com/in/andrew-donegan-6a3514152/" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} hspace="10"alt="linkedin"/>
        </a>
        <a href="https://github.com/Donegaan" target="_blank" rel="noopener noreferrer">
          <img src={github} hspace="10" alt="github"/>
        </a>
        <a href="https://donegaan.github.io/cv.pdf" target="_blank" rel="noopener noreferrer">
          <img src={cv} hspace="10"alt="cv"/> {/*CV by unlimicon from the Noun Project*/}
        </a>
        
      </div>
    );
  }
}
export default Welcome;