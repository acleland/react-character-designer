import React from 'react';

export default function Character({ phrases }) {
  return (
    <div className="phrases">
      {phrases.map((phrase) => (
        <p className="catchphrase" key={phrase}>
          {phrase}
        </p>
      ))}
    </div>
  );
}
