import React, { Component } from 'react';
import CheckTea from '../components/CheckTea'
import Timer from '../components/Timer'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.childTimer = React.createRef();
    this.state = {
      selected: 'Black',
    };
  }

  handleClick = (t) => {
    this.setState({selected: t.target.innerHTML});
  }

  render() {
    return (
      <div className="App">
        <CheckTea selected = {this.state.selected} clickfunc = {this.handleClick}/>
        <Timer selected={this.state.selected} />
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
