import React, { Component } from 'react';
import CheckTea from '../components/CheckTea'
import Timer from '../components/Timer'
import './App.css';

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
  }

  render() {
    return (
      <div className="App" id={this.state.selected}>
        {/* <h1 className="App-title" >Herbata czeka</h1> */}
        <div class="cont">
          <h1>The only tea timer you need.</h1>
        </div>

        <CheckTea selected = {this.state.selected} clickfunc = {this.handleClick}/>
        <Timer selected = {this.state.selected}/>
      </div>
    );
  }
}

export default App;
