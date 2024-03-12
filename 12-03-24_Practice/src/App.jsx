import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Person from './todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1>Vite + React</h1>
      <Person device='mobile' price='43k' isrich={true}></Person>
      <Person name='kuru' device='tablet' price='33k' isrich={false}></Person>
      <Person name='bulu' device='laptop' price='73k' isrich={true}></Person>
      <Person name='kulu' device='desktop' price='113k' isrich={true}></Person>
      
    </>
  )
}


export default App
