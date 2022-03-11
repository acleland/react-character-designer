import React, { useState } from 'react';

import './Home.css';

import Character from '../Character/Character.js';
import Picker from '../Picker/Picker.js';
import Phrases from '../Phrases/Phrases.js';

export default function Home() {
  const [head, setHead] = useState('');
  const [middle, setMiddle] = useState('');
  const [bottom, setBottom] = useState('');
  const [phrase, setPhrase] = useState('');
  const [phrases, setPhrases] = useState([]);

  function savePhrase(phrase) {
    setPhrases((phrases) => [...phrases, phrase]);
    setPhrase('');
  }

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
            phrase,
            setPhrase,
            phrases,
            setPhrases,
            savePhrase,
          }}
        />
        <p>No one can forget your character&#39;s catchphrases:</p>
        <Phrases phrases={phrases} />
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
