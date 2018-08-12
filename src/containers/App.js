import React, { Component } from 'react';
import CheckTea from '../components/CheckTea'
import Timer from '../components/Timer'
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      selected: 'black',
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Herbata czeka</h1>
        <CheckTea />
        <Timer />
      </div>
    );
  }
}

export default App;
