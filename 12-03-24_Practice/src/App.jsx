import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1>Vite + React</h1>
      <Person name='shopnil' device='mobile' price='43k'></Person>
      <Person name='kuru' device='tablet' price='33k'></Person>
      <Person name='bulu' device='laptop' price='73k'></Person>
      <Person name='kulu' device='desktop' price='113k'></Person>
      
    </>
  )
}
function Person(props)
{
  const styles={
    border: '2px solid purple',
    borderRadius:'10px'
  }
  return <h3 className='person' style={styles}>I am {props.name}. i have {props.device} and its price is {props.price}</h3>
}

export default App
