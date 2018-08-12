import React , {Component} from 'react';
import Start from './Start'
import './Timer.css';

class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render () {
    return (
      <div>
        <h3>Timer goes here</h3>
        <Start />
      </div>
    )
  }
}

export default Timer;
