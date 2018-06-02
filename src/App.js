import React, { Component } from 'react';
import './App.css';

import Info from './components/info'
import Projects from './components/projects'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Info/>
          <br/>
          
          <Projects/>
        </div>
      </div>
    );
  }
}

export default App;
