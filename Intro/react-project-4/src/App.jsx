import { useState } from 'react'
import './App.css'
import Button from './Components/Button'
import Card from './Components/Card'

function App() {
  const [count,setCount] = useState(0);

  function handleClick(){
    setCount(count+1);
  }
  return (
    <div>
      <Card children ='Rupam Das'>
        <h1>BEST WEB DEV Course</h1>
        <p>Trying to be consistent</p>
      </Card>

      <Card children='And so my watch begins!'>Another children</Card>
      <br />
      <Button incrementCount={handleClick} text='Click Me!'>
        <h1>{count}</h1>
      </Button>
    </div>
  )
}

export default App
