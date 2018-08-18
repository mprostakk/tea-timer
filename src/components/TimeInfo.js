import React from 'react';

const TimeInfo = ({time}) => {
  return (
    <div>
      <h3>The perfect time is:</h3>
      <div className="temp">
        <h3 className="info">{time}</h3>
      </div>
    </div>
  )
}

export default TimeInfo;
