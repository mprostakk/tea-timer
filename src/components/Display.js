import React from 'react';

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slider: null,
    }
  }

  onChange = (e) => {
    this.props.onSecondsChanged(e.target.value);
  }

  render() {
    return (
      <div className="range-slider">
        <input className="range-slider__range"
          step = "5"
          type="range"
          min="5"
          max="600"
          onChange={this.onChange}
          value={this.props.time} />
      </div>
    )
  }
}

export default Display;
