import { useState } from "react"


function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor:color}} >

        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">   
            <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
              <button
              onClick={() => setColor("red")}
              className = "outeline-none px-4 rounded-full text-white shadow-lg"
              style={{backgroundColor:"red"}}
              >Red</button>
              
              <button
              onClick={() => setColor("Green")}
              className = "outeline-none px-4 rounded-full text-white shadow-lg"
              style={{backgroundColor:"Green"}}
              >Green</button>
              
              <button
              onClick={() => setColor("Pink")}
              className = "outeline-none px-4 rounded-full text-white shadow-lg"
              style={{backgroundColor:"pink"}}
              >Pink</button>
              
              <button
              onClick={() => setColor("Orange")}
              className = "outeline-none px-4 rounded-full text-white shadow-lg"
              style={{backgroundColor:"Orange"}}
              >Orange</button>
              
              <button
              onClick={() => setColor("black")}
              className = "outeline-none px-4 rounded-full text-white shadow-lg"
              style={{backgroundColor:"Black"}}
              >Black</button>

              <button
              onClick={() => setColor("yellow")}
                className = "outeline-none px-4 rounded-full text-white shadow-lg"
                style = {{backgroundColor:"Yellow"}}
                >yellow
              </button>
            
            </div>
        </div>
    </div>
  )
}

export default App
