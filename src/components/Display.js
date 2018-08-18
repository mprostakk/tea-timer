import React from 'react';

class Display extends React.Component {
  constructor(props) {
    super(props);
  }

  onChange = (e) => {
    this.props.onSecondsChanged(e.target.value);
  }

  render() {
    return (
      <div>
        <input onChange={this.onChange} value={this.props.time} />
      </div>
    )
  }
}

export default Display;
