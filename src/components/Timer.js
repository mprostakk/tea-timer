import React , {Component} from 'react';
import TimeInfo from './TimeInfo';
import TempInfo from './TempInfo';
import teainfo from '../teainfo';
import Display from './Display'

class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOn: false,
      time: 0,
    };

    this.url = "http://dight310.byu.edu/media/audio/FreeLoops.com/5/5/Old%20Alarm%20Clock-14670-Free-Loops.com.mp3";
    this.audio = new Audio(this.url);
    this.interval = 0;
  }

  makeSoundAlert = () => {
    this.audio.play();
  }

  startTimer = () => {
    if(this.state.time !== 0 && this.state.isOn === false) {
                this.setState({isOn: true});
      this.interval = setInterval(() => {
        if(this.state.time !== 0){
          this.setState({
            time: this.state.time - 1,
          })
        }
        else {
          this.stopTimer();
          this.makeSoundAlert();
        }
      }, 1000);
    }
  }

  addZero = (time) => {
    let newTime = time.toString();
    if(time < 10) {
      newTime = "0" + newTime;
    }
    return newTime;
  }

  secondsToTime = (secs) => {
    let divisor_for_minutes = secs % (60*60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      "m": this.addZero(minutes),
      "s": this.addZero(seconds)
    };
    return obj;
  }

  stopTimer = () => {
    clearInterval(this.interval);
    this.setState({isOn: false})
  }

  resetTimer = () => {
    this.stopTimer();
    this.setState({
      time: teainfo[this.props.selected].sec,
    })
  }

  componentDidMount() {
    this.setState({
      time: teainfo[this.props.selected].sec,
    })
  }

  onSecondsChanged = (seconds) => {
    seconds = parseInt(seconds, 10);

    if(seconds <= 359999) {
      this.setState({time: seconds})
    } else {
      this.setState({time: 0})
    }
  }

  componentWillReceiveProps(nextProps) {
    this.stopTimer();
    this.setState({
      time: teainfo[nextProps.selected].sec,
    })
  }

  render () {
    let obj = this.secondsToTime(this.state.time)

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

        <div className="timer-container">
          <div className="time" >
            <h1 className="">{obj.m}:{obj.s}</h1>

            <Display onSecondsChanged={this.onSecondsChanged}
              time={this.state.time} />
          </div>

          {
            !this.state.isOn && <button className="button" onClick={this.startTimer}>Start</button>
          }

          {
            this.state.isOn && <button className="button b-red" onClick={this.stopTimer}>Stop</button>
          }

          {
            !(this.state.time === teainfo[this.props.selected].sec ) && !(this.state.isOn) &&
            <button className="button b-reset" onClick={this.resetTimer}>Reset</button>
          }
      </div>
      </section>
    )
  }
}

export default Timer;
