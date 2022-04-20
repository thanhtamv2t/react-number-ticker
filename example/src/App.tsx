import React from 'react'
import { useState } from 'react'

import ReactNumberTicker from 'react-number-ticker'
import 'react-number-ticker/dist/index.css'

const RandomAndFormatNumber = () => {
  const rndNumber = Math.floor(Math.random() * 1000000);

  const fmNumber = new Intl.NumberFormat().format(rndNumber)

  return fmNumber
}

const App = () => {
  const [n, setN] = useState(()=> RandomAndFormatNumber())


  const onChangeNumber = () => {
    const fmNumber = RandomAndFormatNumber();
    setN(fmNumber)
  }
  

  return (
    <main>
      <div className="number-container">
        <ReactNumberTicker number={`$${n}`}/>
      </div>
      <button onClick={onChangeNumber}>Change me</button>
    </main>
  )
}

export default App
