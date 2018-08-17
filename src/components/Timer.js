import React , {Component} from 'react';
// import Start from './Start';
import TimeInfo from './TimeInfo';
import TempInfo from './TempInfo';
import './Timer.css';
import teainfo from '../teainfo';

class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: {},
      seconds: 5
    };
    this.timer = 0;
  }

  secondsToTime = (secs) => {
    let divisor_for_minutes = secs % (60*60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      "m": minutes,
      "s": seconds
    };
    return obj;
  }

  componentDidMount() {
    let timeLeftVar = this.secondsToTime(this.state.seconds);
    this.setState({ time: timeLeftVar })

    this.props.onRef(this);
  }

  compnentWillUnmount() {
    this.props.onRef(undefined);
  }

  startTimer = () => {
    if (this.timer === 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  countDown = () => {
    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    })

    if(seconds === 0) {
      clearInterval(this.timer);
    }
  }

  appUpdate = () => {
    clearInterval(this.timer);
    this.timer = 0;
    this.setState({
      // time: this.secondsToTime(teainfo[this.props.selected].sec),
      seconds: teainfo[this.props.selected.sec]
    })

    // let timeLeftVar = this.secondsToTime((teainfo[this.props.selected.sec]));
    // this.setState({ time: timeLeftVar })
  }

  render () {
    return (
      <section className = "sec2">

        <div>
          <h3 class="currently-picked">
            Currently picked
          </h3>
          <h1 class="text-mask" id={this.props.selected}>
            {this.props.selected}
          </h1>
        </div>

        <div className="cont cont2">
          <TimeInfo time={teainfo[this.props.selected].time}/>
          <TempInfo temp={teainfo[this.props.selected].temp}/>
        </div>
        <div className="timer">

          <div className="">
            m: {this.state.time.m} s: {this.state.time.s}
          </div>

        </div>
        <button onClick={this.startTimer}>Start</button>
        {/* <Start ifon="" name = "Start"/> */}
      </section>
    )
  }
}

export default Timer;
