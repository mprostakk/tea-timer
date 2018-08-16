import React from 'react';
import './Card.css';

const Card = ({clickfunc, name}) => {
  return (
    <div onClick={clickfunc}
      className= "col white"
      id={name}
      value={name} >
      <h3>{name}</h3>
    </div>
  )
}

export default Card;
