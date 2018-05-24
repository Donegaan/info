import React, { Component } from 'react';
import './App.css';

import Info from './components/info'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Info/>
        </div>
      </div>
    );
  }
}

export default App;
