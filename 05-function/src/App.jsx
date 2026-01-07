import React from 'react'

const App = () => {

  const whiletyping = (val) => {
    console.log(val)
  }

  return (
    <div>
      {/* you can take the parameter using this method you cant call the function simply */}
      <input onChange={function(elem) {
        whiletyping(elem.target.value);
        
      }} type="text" placeholder='Enter here' />
    </div>
  )
}

export default App
