import React, { Component } from 'react';
import CheckTea from '../components/CheckTea'
import Timer from '../components/Timer'
import './App.css';
import teainfo from '../teainfo';

class App extends Component {
  constructor() {
    super();
    this.state = {
      selected: 'black',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('hi')
  }

  compnentDidMount() {
    this.setState({info: teainfo})
  }

  render() {
    return (
      <div className="App">
        <h1>Herbata czeka</h1>
        <CheckTea selected = {this.state.selected} clickfunc = {this.handleClick}/>
        <Timer />
      </div>
    );
  }
}

export default App;
