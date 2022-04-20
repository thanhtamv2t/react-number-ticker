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
    <div>
      <ReactNumberTicker number={`$${n}`}/>
      <button onClick={onChangeNumber}>Change me</button>
    </div>
  )
}

export default App
