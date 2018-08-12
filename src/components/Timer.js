import React , {Component} from 'react';
import Start from './Start'
import './Timer.css';

class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      on: false,
    }
  }

  changeButton() {
    this.setState({
      on: !this.state.on
    })
  }

  giveName() {
    if(this.state.on === false){
      return 'Start';
    }
    else {
      return 'Stop';
    }
  }

  render () {
    return (
      <div>
        <h3>Timer goes here</h3>
        <Start ifon={this.changeButton} name = {this.giveName()}/>
      </div>
    )
  }
}

export default Timer;
