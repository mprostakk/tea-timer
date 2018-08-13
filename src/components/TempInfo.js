import React from 'react';

const TempInfo = ({temp}) => {
  return (
    <div>
      <h3>Tempature:</h3>
      <h2 className = "info">{temp}</h2>
    </div>

  )
}

export default TempInfo;
