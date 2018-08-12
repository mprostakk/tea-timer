import React from 'react';
import './Start.css'

const Start = ({changeButton, name}) => {
  return (
    <a class="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-green"
       id ="start"
       onClick = {changeButton}
       >
       {name}
     </a>
  )
}

export default Start;
