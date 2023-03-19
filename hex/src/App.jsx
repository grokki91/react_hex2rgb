import './App.css'
import { useState } from "react";
import HexInput from './components/HexInput';
import RgbOutput from './components/RgbOutput';

function App() {
  let [color, setColor] = useState('');

  const handleInput = (e) => {
    setColor(e.target.value);
  }

  const convert = (hex) => {
    let arr = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    
     if (hex.length === 7 && arr) {
      return `rgb(${[
        parseInt(arr[1], 16),
        parseInt(arr[2], 16),
        parseInt(arr[3], 16),
      ].join(',')})`;
     } 
  }

  const addBackgroundColor = () => {
    return !convert(color) && color.length === 7 ? 'red' : convert(color);
  }

  const checkBrightness = (color) => {
    if (color) {
      const newColor = color;
      const arr = newColor.slice(0, -1).slice(4,).split(',');
      const brightValue = arr.reduce((acc, el) => acc + Number(el), 0);
      return brightValue > 382 ? '#000' : '#fff';
    }
  }

  return (
    <div className='App' style={{background: addBackgroundColor()}}>
      <HexInput color={color} addHex={handleInput}/>
      <RgbOutput 
        text={!convert(color) && color.length === 7 ? 'Ошибка!' : convert(color)}
        color={addBackgroundColor()} brightness={checkBrightness(convert(color))}
      />
    </div>
  )
}

export default App;
