import React from 'react';

export default function Picker() {
  return (
    <div className="picker">
      <select id="head-dropdown">
        <option value="bird">Bird</option>
        <option value="duck">Duck</option>
        <option value="dog">Dog</option>
        <option value="horse">Horse</option>
      </select>
    </div>
  );
}
