import React from 'react';
import './Start.css'

const Start = ({ifon, name}) => {
  return (
    <a className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-green"
       id ="start"
       onClick = {ifon}
       >
       {name}
     </a>
  )
}

export default Start;
