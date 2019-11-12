import React from 'react';
import Weather from './Weather';
import '../styles/base.css';

function App() {
  return (
    <div className="app">
      <div className="background-layer">
        <div className="opacity-layer">
          <p>
            Sakinaw Lake
          </p>
          <Weather />
        </div>
      </div>
    </div>
  );
}

export default App;
