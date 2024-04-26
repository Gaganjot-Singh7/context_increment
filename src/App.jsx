import { useState } from 'react'
import { Context } from './context/Context'
import './App.css'
import Count from './Count'

function App() {

const ContextProvider=Context.Provider

  const [count, setCount] = useState(0)

  return (
    <ContextProvider value={{count,setCount}}>
      <Count />
    </ContextProvider>


  )
}

export default App
