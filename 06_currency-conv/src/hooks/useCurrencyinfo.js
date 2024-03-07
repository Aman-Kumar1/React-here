// here we make custom hooks
import { useEffect, useState } from "react";

//https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json

function useCurrencyinfo(currency){
    
    const [data,setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
    // console.log(data);
    },[currency]);
    console.log(data);
    return data;
}

export default useCurrencyinfo;

//this is custom hook design