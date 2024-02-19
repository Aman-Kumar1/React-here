import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

    // useState(true) //we have to add default value for this functio (true) , (empty array) or number somthing

    let [counter, setCounter] =  useState(0); //this is a method counter is only nameing convection "setCounter is function"
    
  // let counter = 5; no working here we have to use HOOKS

    let addValue= () => {
      // console.log("click",counter);
      // counter = counter + 1 ;
      if(counter < 20){
        setCounter(counter + 1);
        setCounter(counter + 1);//not working for update _ useState is work in bach
        setCounter(revCounter => revCounter + 1);
        setCounter(revCounter => revCounter + 1);
      }
      else{
        alert("not more then 20");
      }
  }

  let minusValue = () => {
    if(counter > 0){
      setCounter(counter - 1);
    }
    else{
      alert("not less then 0");
      }
    }
  return (
    <>
     
      <h1>Vite + React</h1>
      <h2>counter value: {counter}</h2>
      <button onClick={addValue}>add value</button>
      <br />
      <button onClick={minusValue}>minus value</button>
    </>
  )
}

export default App;
//here we set a button for state change and also set the limit 0 to 20