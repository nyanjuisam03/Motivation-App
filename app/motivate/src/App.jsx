import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [motivate, setMotivate] = useState('')
const url="https://type.fit/api/quotes"

const getMotivate=async()=>{
  try{
    const res =await fetch(url)
    const data=await res.json()
    const randomIndex = Math.floor(Math.random() * data.length)
    setMotivate(data[randomIndex])
    console.log(data)
  }
  catch(err){}
}


useEffect(()=>{
  getMotivate()
},[])

  return (
    <>
      <h2>Motivtional app</h2>
      <div>
        <h2>{motivate.text}</h2>
        <button onClick={getMotivate}>Click Me</button>
      </div>
     
    </>
  )
}

export default App
