import { useState } from 'react'
import './App.css'

function App() {
  const [bgColor, setBgColor] = useState("olive")
  return (
    <div className='w-full h-screen duration-200'
    style={{backgroundColor: bgColor}}
    >
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
      <div
      className='flex flex-wrap justify-center gap-5 shadow-lg px-3 py-2 rounded-full bg-white'
      >
      <button
      onClick={() => setBgColor("red")}
  className='outline-none px-5 text-xl py-2 text-white shadow-xl rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl'
  style={{
    backgroundColor: "red"
  }}
>Red</button>

<button
  onClick={() => setBgColor("green")}
  className='outline-none px-5 text-xl py-2 text-white shadow-xl rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl'
  style={{
    backgroundColor: "green"
  }}
>Green</button>

<button
  onClick={() => setBgColor("blue")}
  className='outline-none px-5 text-xl py-2 text-white shadow-xl rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl'
  style={{
    backgroundColor: "blue"
  }}
>Blue</button>
<button
  onClick={() => setBgColor("orange")}
  className='outline-none px-5 text-xl py-2 text-white shadow-xl rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl'
  style={{
    backgroundColor: "orange"
  }}
>Orange</button>
<button
  onClick={() => setBgColor("pink")}
  className='outline-none px-5 text-xl py-2 text-black shadow-xl rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl'
  style={{
    backgroundColor: "pink"
  }}
>Pink</button>
<button
  onClick={() => setBgColor("purple")}
  className='outline-none px-5 text-xl py-2 text-white shadow-xl rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl'
  style={{
    backgroundColor: "purple"
  }}
>Purple</button>
<button
  onClick={() => setBgColor("olive")}
  className='outline-none px-5 text-xl py-2 text-white shadow-xl rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl'
  style={{
    backgroundColor: "olive"
  }}
>Olive</button>
<button
  onClick={() => setBgColor("gray")}
  className='outline-none px-5 text-xl py-2 text-white shadow-xl rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl'
  style={{
    backgroundColor: "gray"
  }}
>Gray</button>
<button
  onClick={() => setBgColor("yellow")}
  className='outline-none px-5 text-xl py-2 text-black shadow-xl rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl'
  style={{
    backgroundColor: "yellow"
  }}
>Yellow</button>
<button
  onClick={() => setBgColor("lavender")}
  className='outline-none px-5 text-xl py-2 text-black shadow-xl rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl'
  style={{
    backgroundColor: "lavender"
  }}
>Lavender</button>

<button
  onClick={() => setBgColor("black")}
  className='outline-none px-5 text-xl py-2 text-white shadow-xl rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl'
  style={{
    backgroundColor: "black"
  }}
>Black</button>

      </div>
      </div>
    </div>
  )
}

export default App
