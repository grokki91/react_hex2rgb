import './App.css'
import { useState } from "react";

function App() {
  let [color, setColor] = useState('');

  const handleInput = (e) => {
    setColor(e.target.value);
  }

  function convert(hex) {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    let timer;
    return function() {
      clearTimeout(timer);
      timer = setTimeout(() => {
        console.log(toGetArrRgb(result));
      }, 2000);
    }
  }

  const toGetArrRgb = (arr) => {
    return arr ? 
    `rgb(${[
      parseInt(arr[1], 16),
      parseInt(arr[2], 16),
      parseInt(arr[3], 16),
    ].join(',')})` : 'Ошибка!';
  }

  const rgb = convert(color)();

  return (
    <div className='App' style={{background: rgb}}>
        <input type="text" placeholder="Write HEX" value={color} onChange={handleInput} maxLength="7"/>
        <div className="output" style={{background: rgb}}>{rgb}</div>
    </div>
  )
}

export default App
