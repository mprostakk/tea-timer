import React from 'react';

const Card = ({clickfunc, name}) => {
  return (
    <div onClick={clickfunc} className="dtc tc pv4 bg-black-05">
      {name}
    </div>
  )
}

export default Card;
