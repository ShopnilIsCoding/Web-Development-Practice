import { useState } from 'react'
import './App.css'
import Person from './todo'

function App() {
  const [count, setCount] = useState(0)


  const details=[
    {job:'Home-Tutor',age:22},
    {age:32},
    {job:'Doctor',age:54},
    {job:'Engineer',age:43}
  ]
  return (
    <>
      
      <h1>Vite + React</h1>
      <Person device='mobile' price='43k' isrich={true}></Person>
      <Person name='kuru' device='tablet' price='33k' isrich={false}></Person>
      <Person name='bulu' device='laptop' price='73k' isrich={true}></Person>
      <Person name='kulu' device='desktop' price='113k' isrich={true}></Person>
      {
        details.map(details=><Details job={details.job} age={details.age}></Details>)
      }
    </>
  )
}

function Details({job,age})
{
 return (<>
 <h4>his job is {job?job:'unemployed'} and his age is {age}</h4>
 </>)
}

export default App
