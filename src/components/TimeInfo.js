import React from 'react';

const TimeInfo = ({time}) => {
  return (
    <div>
      <h3>Time:</h3>
      <h2 className="info">{time}</h2>
    </div>
  )
}

export default TimeInfo;
