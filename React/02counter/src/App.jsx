import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)

  // let counter = 13;

  const addValue = () => {
    if (counter >= 0 && counter <20) counter += 1;
    setCounter(counter)
  }

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>Counter {counter}</h1>
      <button
      onClick={addValue}
      >add value {counter}</button>
      <br />
      <br />
      <button
      onClick={removeValue}
      >remove value {counter} </button>
    </>
  )
}

export default App
