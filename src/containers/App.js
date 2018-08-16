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
      <div className="App">
        {/* <h1 className="App-title" >Herbata czeka</h1> */}
        <div className="cont">
          <h1 id="header">The only tea timer you need.</h1>
        </div>

        <CheckTea selected = {this.state.selected} clickfunc = {this.handleClick}/>
        <Timer selected = {this.state.selected}/>

        <footer>
            <p>
              Check this project out on
              <a href="https://github.com/mprostakk/tea-timer"><strong>Github</strong></a>
            </p>
        </footer>
      </div>
    );
  }
}

export default App;
