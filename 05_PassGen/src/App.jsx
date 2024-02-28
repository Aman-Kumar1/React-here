import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setlength] = useState(8);
  const [numAllowed, setnumAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setpassword] = useState("");

  //useRef hook
  //he we have to pass a refference and we can pass a ref function from every input

  const passRef = useRef(null);

  const passGen = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numAllowed) str +="0123456789";
    if(charAllowed) str +="~!@#$%^&*(){}[]+*/-`";
    
    for (let i= 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setpassword(pass);


  },[length,numAllowed,charAllowed,setpassword])

  // copy pass to clipboard
  const copyPassToClipboard = useCallback(() => {
  //-------------
    passRef.current?.select();
    passRef.current?.setSelectionRange(0,50);
  //-------------  
    window.navigator.clipboard.writeText(password);
  },[password])

  useEffect(() =>{
    passGen();

  }, [length,numAllowed,charAllowed,passGen, setpassword])
  return (
    <>
      
      <br />
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800' >

      <h1 className='text-2xl text-center text-white my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
          ref={passRef} 
          />

          <button
          onClick={copyPassToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>
            copy
          </button>

        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
            min={6}
            max = {50}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setlength(e.target.value)}} />
            <label >length :{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
          <input type="checkbox"
            defaultChecked={numAllowed}
            id="numberInput"
            onChange={() => {
              setnumAllowed((prev) => !prev)}} />
            <label >Numbers </label>
          </div>

          <div className='flex items-center gap-x-1'>
          <input type="checkbox"
            defaultChecked={numAllowed}
            id="CharacterInput"
            onChange={() => {
              setcharAllowed((prev) => !prev)}} />
            <label >Character </label>
          </div>


        </div>
      </div>

    </>
  )
}

export default App
