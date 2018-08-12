import React from 'react';
import Card from './Card';

const CheckTea = ({selected , clickfunc}) => {
  return (
    <div className="dt dt--fixed">
      <Card clickfunc={clickfunc} name="green" />
      <Card clickfunc={clickfunc} name="black" />
      <Card clickfunc={clickfunc} name="white" />
    </div>
  )
}

export default CheckTea;
