import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [step, setStep] = useState(1)
  function increase(){
    setCount(ctn => ctn + 1);
  }

  function decrease(){
    if(count===0){
      return
    }else{
      setCount(ctn => ctn - 1);
    }
  }

  function reset(){
    setCount(0);
  }

  return (
   <div>
    <h1>Counter</h1>

    <br />
    <input type="number" value={step} onChange={(e) =>  setStep(Number(e.target.value))}/>

    <h2 style={{color: count > 0 ? 'green' : 'gray'}}>{count}</h2>
    <button onClick={increase}>+</button>
    <button onClick={decrease}>-</button>
    <button onClick={reset}>Reset</button>

   </div>
  )
}

export default App
