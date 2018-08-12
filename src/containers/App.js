import React, { Component } from 'react';
import CheckTea from '../components/CheckTea'
import Timer from '../components/Timer'
import './App.css';
import teainfo from '../teainfo';

class App extends Component {
  constructor() {
    super();
    this.state = {
      selected: 'Black',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(t) {
    this.setState({selected: t.target.innerHTML})
  }

  compnentDidMount() {
    this.setState({info: teainfo})
  }

  render() {
    return (
      <div className="App" id={this.state.selected}>
        <h1 className="App-title" >Herbata czeka</h1>
        <CheckTea selected = {this.state.selected} clickfunc = {this.handleClick}/>
        <Timer />
      </div>
    );
  }
}

export default App;
