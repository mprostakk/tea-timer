import React , {Component} from 'react';
// import Start from './Start';
import TimeInfo from './TimeInfo';
import TempInfo from './TempInfo';
import './Timer.css';
import teainfo from '../teainfo';

// const prettyMs = require('pretty-ms');

class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: 0,
      isOn: false,
      start: 0
    }
  }

  startTimer = () => {
    this.setState({
      isOn: true,
      time: this.state.time,
      start: Date.now() - this.state.time
    })
    this.timer = setInterval(() => this.setState({
      time: Date.now() - this.state.start
    }), 1);
  }

  stopTimer = () => {
    this.setState({
      isOn: false
    })
    clearInterval(this.timer);
  }

  resetTimer = () => {
    this.setState({time: 0, isOn: false})
  }


  render () {
    let start = (this.state.time === 0 ) ?
    <button onClick={this.startTimer}>Start</button> :
    null

    let stop = (this.state.time === 0  || !this.state.isOn) ?
    null :
    <button onClick={this.stopTimer}>Stop</button>

    let resume = (this.state.time === 0 || this.state.isOn) ?
    null :
    <button onClick={this.startTimer}>Resume</button>

    let reset = (this.state.time === 0 || this.state.isOn) ?
    null :
    <button onClick={this.resetTimer}>Reset</button>

    return (
      <section className = "sec2">
        <div className="cont cont2">
          <TimeInfo time={teainfo[this.props.selected].time}/>
          <TempInfo temp={teainfo[this.props.selected].temp}/>
        </div>

        <div>
          <h3>timer: {(this.state.time)}</h3>
          {start}
          {resume}
          {stop}
          {reset}
        </div>

        {/* <Start ifon="" name = "Start"/> */}
      </section>
    )
  }
}

export default Timer;
