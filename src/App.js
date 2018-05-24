import React, { Component } from 'react';
import './App.css';

import Info from './components/info'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Info/>
        {/* <div className="childbox">
          I shall be in the middle of parentbox regardless of its size!
        </div> */}
        </div>
      </div>
    );
  }
}

export default App;
