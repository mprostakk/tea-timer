import React from 'react';
import Card from './Card';

const CheckTea = ({selected , clickfunc}) => {
  return (
    <div className="dt dt--fixed">
      <Card clickfunc={clickfunc} name="Green" />
      <Card clickfunc={clickfunc} name="Black" />
      <Card clickfunc={clickfunc} name="White" />
    </div>
  )
}

export default CheckTea;
