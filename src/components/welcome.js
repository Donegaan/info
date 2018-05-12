import React, { Component } from 'react';
import github from '../GitHub-Mark-64px.png'
import linkedin from '../In-2C-66px-TM.png'
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
      </div>
    );
  }
}
export default Welcome;