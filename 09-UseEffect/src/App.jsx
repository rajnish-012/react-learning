import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const App = () => {
  const [num1, setNum1] = useState(0);
  useEffect(() => {
    console.log("UseEffect for num1 is running ...") //[] is called as dependency if it null then it runs only for one time
  }, [num1]) //it will run only when num1 will change 
  
  return (
    <div>
      <h1>{num1}</h1>
      <button onClick={()=>{
        setNum1(num1+1)
      }}>click</button>
    </div>
  )
}

export default App
