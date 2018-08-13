import React , {Component} from 'react';
import Start from './Start';
import TimeInfo from './TimeInfo';
import TempInfo from './TempInfo';
import './Timer.css';
import teainfo from '../teainfo';


class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      on: false,
    }
  }

  changeButton = () => {
    this.setState((prevState) => {
      return ({
        on: !prevState.on
      })
    })
  }

  giveName = () => {
    if(this.state.on === false){
      return 'Start';
    }
    else {
      return 'Stop';
    }
  }

  render () {
    return (
      <div className="db">
        <TimeInfo time={teainfo[this.props.selected].time}/>
        <TempInfo temp={teainfo[this.props.selected].temp}/>
        <Start ifon={this.changeButton} name = {this.giveName()}/>
      </div>
    )
  }
}

export default Timer;