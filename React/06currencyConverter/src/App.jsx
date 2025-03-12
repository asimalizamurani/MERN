import React, { useState } from 'react'
import {InputBox} from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

const App = () => {

  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("pkr");
  const [toCurrency, setToCurrency] = useState("usd");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(fromCurrency) || {};

  // grab all the currencies keys from the object
    const options = Object.keys(currencyInfo)

  // swap method to swap the currencies
  const swap = () => {
    setFromCurrency(toCurrency)
    setToCurrency(fromCurrency)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  // convert method to convert the amount
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[toCurrency])
  }

  // const BackgroundImage = 'https://images.pexels.com/photos/30890105/pexels-photo-30890105/free-photo-of-scenic-alpine-lake-with-majestic-snowy-peaks.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load';

  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://images.pexels.com/photos/30890105/pexels-photo-30890105/free-photo-of-scenic-alpine-lake-with-majestic-snowy-peaks.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load')`,
            backgroundRepeat: 'no-repeat',
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
                            amount={convertedAmount}
                            currencyOption={options}
                            onCurrencyChange={() => setAmount(amount)}
                            selectCurrency={fromCurrency}
                            onAmountChange={(amount) => setAmount(amount)}
                            
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
                            amount={convertedAmount}
                            currencyOption={options}
                            onCurrencyChange={(currency) => setToCurrency(currency)}
                            selectCurrency={toCurrency}
                            amountDisabled
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {fromCurrency.toUpperCase()} To {toCurrency.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App