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
      isOn: false,
      time: 0,
    };
    this.interval = 0;
  }

  startTimer = () => {
    if(this.state.time !== 0 && this.state.isOn === false) {
      this.interval = setInterval(() => {
        if(this.state.time !== 0){
          this.setState({
            time: this.state.time - 1,
          })
          this.setState({isOn: true});
        }
        else {
          this.stopTimer();
        }
      }, 1000);
    }
  }

  stopTimer = () => {
    clearInterval(this.interval);
    this.setState({isOn: false})
  }

  resetTimer = () => {
    this.stopTimer();
    this.setState({
      time: 20,
    })
  }

  componentDidMount() {
    this.setState({
      time: 5,
    })
  }

  // appUpdate = () => {
  //   clearInterval(this.timer);
  //   this.timer = 0;
  //   this.setState({
  //     // time: this.secondsToTime(teainfo[this.props.selected].sec),
  //     seconds: teainfo[this.props.selected.sec]
  //   })
  //
  //   // let timeLeftVar = this.secondsToTime((teainfo[this.props.selected.sec]));
  //   // this.setState({ time: timeLeftVar })
  // }

  render () {
    return (
      <section className = "sec2">

        <div>
          <h3 className="currently-picked">
            Currently picked
          </h3>
          <h1 className="text-mask" id={this.props.selected}>
            {this.props.selected}
          </h1>
        </div>

        <div className="cont cont2">
          <TimeInfo time={teainfo[this.props.selected].time}/>
          <TempInfo temp={teainfo[this.props.selected].temp}/>
        </div>
        <div className="cont">
            <h3>{this.state.time}</h3>
        </div>
        <button onClick={this.startTimer}>Start</button>
        <button onClick={this.stopTimer}>Stop</button>
        <button onClick={this.resetTimer}>Reset</button>
        {/* <Start ifon="" name = "Start"/> */}
      </section>
    )
  }
}

export default Timer;
