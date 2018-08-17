import React from 'react';
import Card from './Card';

const CheckTea = ({selected , clickfunc}) => {
  return (
    <section className="sec1">
      <h1>Pick your tea</h1>
      <div className="cont">
        <Card clickfunc={clickfunc} name="Green" myid="Green" myClass="picked"/>
        <Card clickfunc={clickfunc} name="Black" myid="Black" />
        <Card clickfunc={clickfunc} name="White" myid="White" />
      </div>
      <div className="cont">
        <Card clickfunc={clickfunc} name="Fruit" myid="Fruit"/>
        <Card clickfunc={clickfunc} name="Yellow" myid="Yellow" />
        <Card clickfunc={clickfunc} name="Herbal" myid="Herbal" />
      </div>
    </section>
  )
}

export default CheckTea;
