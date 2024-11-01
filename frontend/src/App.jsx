import { useState } from 'react'
import TimeSeries from './TimeSeries.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <TimeSeries/>
    </>
  )
}

export default App
