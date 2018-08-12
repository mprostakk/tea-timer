import React from 'react';
import './Card.css';

const Card = ({clickfunc, name}) => {
  return (
    <div onClick={clickfunc} className= "dtc tc pv4 bg-black-05" id={name} value={name} >
      {name}
    </div>
  )
}

export default Card;
