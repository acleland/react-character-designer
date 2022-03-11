import React from 'react';

export default function Character({ head }) {
  return (
    <div className="character">
      <div
        className="bg head"
        id="head"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/${head}-head.png)` }}
      ></div>
      <div className="bg middle" id="middle"></div>
      <div className="bg bottom" id="bottom"></div>
    </div>
  );
}
