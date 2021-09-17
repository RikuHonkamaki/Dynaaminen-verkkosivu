import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const[weight,setWeight] = useState(0);
  const[bottles,setBottles] = useState(0);
  const[time,setTime] = useState(0);
  const[result,setResult] = useState(0);
  const litra = bottles * 0.33;
  const gramma = litra * 8 * 4.5;
  const polttaa = weight / 10;
  const veressä = gramma - (polttaa * time);
  const tulos = veressä / (weight * 0.7);

  function calculate(e) {
    e.preventDefault();
    setResult(tulos);
  }

  return (
    <form onSubmit={calculate}>
      <div id="container">
        <h2>Alcometer</h2>
        <div>
          <label>Weight</label>
          <input type="number" value={weight}
          onChange={e => setWeight(e.target.value)} />
        </div>
        <div>
        <label>Bottles</label>
          <input type="number" value={bottles} 
          onChange={e => setBottles(e.target.value)} />
        </div>
        <div>
        <label>Time</label>
          <input type="number" value={time} 
          onChange={e => setTime(e.target.value)} />
        </div>
        <div>
          <h5>Gender</h5>
        <label>Male</label>
          <input type="radio" name="gender" />
          <label>Female</label>
          <input type="radio" name="gender" />
        </div>
        <div>
          <button>Calculate</button>
        </div>
        <div>
          <label>RESULT:</label>
          <output>{result.toFixed(2)}</output>    
        </div>
        <div>
          <p>
            Gender painikkeet eivät ole toiminnassa.
          Tulokset lasketaan sillä kaavalla jos valinnasta olisi valittu "Male".
          </p>
        </div>
      </div>
    </form>
    
  );
}

export default App;
