import logo from './logo.svg';
import './App.css';
import {React, useState} from 'react';
import colorNames from 'colornames';
import tinycolor from 'tinycolor2';

function App() {
  const [color, setColor] = useState('#99dddd');
  const [darkText, setDarkText] = useState(true);
  return (
    <div className="App">
      <header className="App-header">
        <div className="Color-box" style={{background: color, color: darkText ? '#000000' : "#ffffff"}}>Empty Value</div>
        <input
            id='Color-form'
            type='text'
            role='searchbox'
            placeholder='Add color name'
            onChange={(e) => {
              const newColor = e.target.value;
              if (colorNames(newColor)) {
                setDarkText(tinycolor((colorNames(e.target.value)).toString()).getBrightness() > 100);
                setColor(newColor);
              }
              else {
                setDarkText(true);
                setColor('white');
              }
            }}
          />
      </header>
    </div>
  );
}

export default App;
