import React, { useState } from 'react';

import './Home.css';

import Character from '../Character/Character.js';
import Picker from '../Picker/Picker.js';

export default function Home() {
  const [head, setHead] = useState('');
  const [middle, setMiddle] = useState('');
  const [bottom, setBottom] = useState('');

  return (
    <main>
      <div className="left">
        <Picker
          {...{
            head,
            setHead,
            middle,
            setMiddle,
            bottom,
            setBottom,
          }}
        />
      </div>

      <div className="right">
        <div className="character">
          <Character
            {...{
              head,
              middle,
              bottom,
            }}
          />
        </div>
      </div>
    </main>
  );
}
