import React, { useState } from 'react';

import './Home.css';

import Head from '../Head/Head.js';
import Picker from '../Picker/Picker.js';

export default function Home(props) {
  return (
    <main>
      <div className="left">
        <Picker />
      </div>
      <div className="right">
        <div className="character">
          <Head />
        </div>
      </div>
    </main>
  );
}
