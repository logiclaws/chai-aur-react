import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 15;
  let [counter, setCounter] = useState(15);

  const addValues = () => {
    // counter += 1;
    if(counter === 20){
      setCounter(counter);
    } else {
      // Sends data in batches using dif algo which will analyse the code and react.
      // setCounter(counter+1);
      // setCounter(counter+1);
      // setCounter(counter+1);
      // setCounter(counter+1);
      
      // setCounter has a callback function which fetchs the previous state of the variable in args.
      setCounter(prevCounter => prevCounter+1)
      setCounter(prevCounter => prevCounter+1)
      setCounter(prevCounter => prevCounter+1)
      setCounter(prevCounter => prevCounter+1)
    }
    
    // console.log("Clicked", counter);
  }
  const removeValues = () =>{
    if(counter === 0) {
      setCounter(counter);
    } else{
      setCounter(counter-1);
    }
    // console.log("Clicked", counter);
  }
  return (
    <>
    <h1>Chai aur react</h1>
    <h2>Counter value : {counter}</h2>
    <button onClick={addValues}>Add value</button><br/><br/>
    <button onClick={removeValues}>Remove value</button>
      </>
  )
}

export default App
