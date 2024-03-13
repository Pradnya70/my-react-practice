import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "Pradnya",
    age: 25
  }
  let newArr = [1,2,3]

  return (
    <>
      <h1 className='bg-blue-400' >Tailwind test </h1>
      <Card username= "chaiaurcode" btnText="click me" />
      <Card username="Pradnya" btnText="visit me"/>
      

    </>
  )
}

export default App
