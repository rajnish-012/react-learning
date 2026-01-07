import React, { useState } from 'react'

const BasicUseState = () => {
    const [num, setNum] = useState(0) // usestate is use to change the state , here initially num = 0
  function IncreaseNum(){
    setNum(num+1);
  }
  function DecreaseNum(){
    setNum(num-1);
  }
function IncreseNum5(){
  setNum(num+5);
}
  return (
    <div className='app'>
      <h1>{num}</h1>
      <button className='btn' onClick={IncreaseNum}>Increase</button>
      <button className='btn' onClick={DecreaseNum}>Decrese</button>
      <button className='btn' onClick={IncreseNum5}>Increse by 5</button>
    </div>
  )
}

export default BasicUseState
