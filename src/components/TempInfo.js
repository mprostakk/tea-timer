import React from 'react';

const TempInfo = ({temp}) => {
  return (
    <div>
      <h3>The ideal tempature is:</h3>
      <div className="temp">
        <h3 className = "info">{temp}</h3>
      </div>
    </div>
  )
}

export default TempInfo;
