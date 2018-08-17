import React from 'react';
import './Card.css';

const Card = ({clickfunc, name, myid, myClass}) => {
  return (
    <div onClick={clickfunc}
      className= {`col white my-button ${myClass}`}
      id={myid}
      value={name} >
      {name}
    </div>
  )
}

export default Card;
