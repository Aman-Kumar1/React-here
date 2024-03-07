import { useState } from 'react'
import { InputBox } from './component'
import useCurrencyinfo from './hooks/useCurrencyinfo';

function App() {

  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmmount, setConvertedAmount ] = useState(0);

  const currencyInfo = useCurrencyinfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmmount);
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

    return (
      <div
          className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
          style={{
              backgroundImage: `url('https://www.google.com/search?q=currency%20converter&tbm=isch&tbs=isz:l&rlz=1C1CHWL_enIN876IN876&hl=en&sa=X&ved=0CAIQpwVqFwoTCODo5_Wh3IQDFQAAAAAdAAAAABAi&biw=1583&bih=739#imgrc=prBYH70b96S1EM&imgdii=aY8omsXK5PxhIM')`,
          }}
      >
          <div className="w-full">
              <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                  
                  <form
                      onSubmit={(e) => {
                          e.preventDefault();
                          convert();
                      }}
                  >
                      <div className="w-full mb-1">
                          <InputBox
                              label="From"
                              amount={amount}
                              currencyOptions={options}
                              onCurrencyChange={(currency) => setAmount(amount)}
                              selectCurrency={from}
                              onAmountChange={(amount)=> setAmount(amount)}
                          />
                      </div>
                      
                      <div className="relative w-full h-0.5">
                          <button
                              type="button"
                              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                              onClick={swap}
                          >
                              swap
                          </button>
                      </div>
                      <div className="w-full mt-1 mb-4">
                          <InputBox
                              label="To"
                              amount={convertedAmmount}
                              currencyOptions={options}
                              onCurrencyChange={(currency) => setTo(currency)}
                              selectCurrency={from}
                              amountDisable
                              
                          />
                      </div>

                      <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                          Convert {from.toUpperCase()} to {to.toUpperCase}
                      </button>
                  </form>
              </div>
          </div>
      </div>
  );

  
}

export default App
