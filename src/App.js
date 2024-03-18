import logo from './logo.svg';
import './App.css';
import React from 'react';
import Container from './Components/Container';
import InputBox from './Components/InputBox';
import { useState } from 'react';
import ToggleButton from './Components/ToggleButton';

function App() {
  const [color, setColor] = useState("#d4022778");
  const [textColor, setTextColor] = useState("black");
  return (
    <React.Fragment>
      <Container color={color} textColor={textColor} />
      <InputBox color={color} setColor={setColor} />
      <ToggleButton textColor={textColor} setTextColor={setTextColor} />
    </React.Fragment>

  );
}

export default App;
