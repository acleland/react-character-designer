import React, { useState } from 'react';

import './Home.css';

import Character from '../Character/Character.js';
import Picker from '../Picker/Picker.js';

export default function Home() {
  const [head, setHead] = useState('');
  const [middle, setMiddle] = useState('');
  return (
    <main>
      <div className="left">
        <Picker
          {...{
            head,
            setHead,
            middle,
            setMiddle,
          }}
        />
      </div>

      <div className="right">
        <div className="character">
          <Character
            {...{
              head,
              middle,
            }}
          />
        </div>
      </div>
    </main>
  );
}
