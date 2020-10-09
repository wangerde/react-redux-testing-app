import React, {useState} from 'react';
import './App.css';

function App() {
  const [state, setState] = useState({count:4, color:'blue'});
  const count = state.count;
  const color = state.color;

  function decrementCount() {
    setState((previousState)=>{
      return { ...previousState, count: previousState.count - 1 }
    });
  }
  function incrementCount() {
    setState((previousCount)=>previousCount+1);
  }

  return(
    <div>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{color}</span>
      <button onClick={incrementCount}>+</button>
    </div>
  )
}

export default App;
