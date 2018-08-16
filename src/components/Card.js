import React from 'react';
import './Card.css';

const Card = ({clickfunc, name, myid}) => {
  return (
    <div onClick={clickfunc}
      className= {`col white my-button`}
      id={myid}
      value={name} >
      {name}
    </div>
  )
}

export default Card;
