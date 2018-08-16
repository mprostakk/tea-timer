import React from 'react';
import './Card.css';

const Card = ({clickfunc, name}) => {
  return (
    <div onClick={clickfunc}
      className= "col white my-button"
      id={name}
      value={name} >
      {name}
    </div>
  )
}

export default Card;
