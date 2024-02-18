import { useState } from 'react'
import Card from './Component/card'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  // let myObj = {
  //   username: "Aman",
  //   age: 24
  // };
  // let arr=[1,2,3];

  return (
    <>
      <h1 className='bg-green-400 text-white p-4 rounded-xl mb-4'>TailWind Test</h1>
      <Card username="Aman kumar" />

      {/* <Card username="123123" obj={myObj} Arr={arr} /> */}
      {/* we can pass the values like this from one component to another component */}
      
      <Card  username="Aman" btnText='click me' />
      <Card  btnText='Find me' />
    </>
  )
}

export default App
