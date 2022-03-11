import React from 'react';

export default function Picker({
  head,
  setHead,
  middle,
  setMiddle,
  bottom,
  setBottom,
  phrase,
  setPhrase,
  savePhrase,
}) {
  return (
    <div className="picker">
      <label>
        Head
        <select id="head-dropdown" value={head} onChange={(e) => setHead(e.target.value)}>
          <option value="bird">Bird</option>
          <option value="duck">Duck</option>
          <option value="dog">Dog</option>
          <option value="horse">Horse</option>
        </select>
      </label>

      <label>
        Middle
        <select id="middle-dropdown" value={middle} onChange={(e) => setMiddle(e.target.value)}>
          <option value="blue">Blue</option>
          <option value="dress">Fancy</option>
          <option value="pink">Pink</option>
          <option value="red">Red</option>
        </select>
      </label>
      <label>
        Bottom
        <select id="bottom-dropdown" value={bottom} onChange={(e) => setBottom(e.target.value)}>
          <option value="leg">Single Leg</option>
          <option value="white">White Pants</option>
          <option value="blue">Blue Jeans</option>
        </select>
      </label>
      <label>
        Add a catch phrase
        <input id="catchphrase-input" value={phrase} onChange={(e) => setPhrase(e.target.value)} />
        <button id="catchphrase-button" onClick={() => savePhrase(phrase)}>
          Add
        </button>
      </label>
    </div>
  );
}
