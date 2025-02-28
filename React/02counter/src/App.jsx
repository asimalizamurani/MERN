import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)

  // let counter = 13;

  const addValue = () => {
    if (counter >= 0 && counter <20){
      setCounter(counter + 1)

      // In these three lines setConter function is stroing the previos value of counter and then adding 1 to it. when we click on the counter button the value will be incremented from 0 to 3
      /* setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1) */
    }
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
