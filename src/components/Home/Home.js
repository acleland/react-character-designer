import React, { useState } from 'react';

import './Home.css';

import Character from '../Character/Character.js';
import Picker from '../Picker/Picker.js';

export default function Home() {
  const [head, setHead] = useState('');

  return (
    <main>
      <div className="left">
        <Picker
          {...{
            head,
            setHead,
          }}
        />
      </div>

      <div className="right">
        <div className="character">
          <Character
            {...{
              head,
            }}
          />
        </div>
      </div>
    </main>
  );
}
