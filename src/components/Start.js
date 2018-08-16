import React from 'react';
import './Start.css'

const Start = ({name}) => {
  return (
    <a className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-green"
       id ="start"
       >
       {name}
     </a>
  )
}

export default Start;
