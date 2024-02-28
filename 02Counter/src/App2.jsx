import React from "react";
import { useState } from "react";

function App2() {

    let [count , setCount] = useState(0);

    let add = () => {
        setCount(count + 1);
    }

    
    let rem = () => {
        setCount(count - 1);
    }

    return(
        <>
        <h2>counter : {count} </h2>
        <button onClick={add}> +++ </button>
        <hr />
        <button onClick={rem}> +++ </button>
        </>
    )
}

export default App2;