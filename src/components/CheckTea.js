import React from 'react';
import Card from './Card';

const CheckTea = ({selected , clickfunc}) => {
  return (
    <section className="sec1">
      <h1>Pick your tea</h1>
      <div className="cont">
        <Card clickfunc={clickfunc} name="Green" myid=""/>
        <Card clickfunc={clickfunc} name="Black" />
        <Card clickfunc={clickfunc} name="White" />
      </div>
      <div className="cont">
        <Card clickfunc={clickfunc} name="Fruit" />
        <Card clickfunc={clickfunc} name="Yellow" />
        <Card clickfunc={clickfunc} name="Herbal" />
      </div>
    </section>
  )
}

export default CheckTea;
