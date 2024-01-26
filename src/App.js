import React from 'react'
import Main from './Main'
import UseStateArray from './array/UseStateArray'
import UseStateObject from './object/UseStateObject'
import Counter from './counter/Counter'

const App = () => {
  return (
    <div>
       <Main /> 
       <br />
       <UseStateArray />
       <br border={2} />
       <Counter />
    </div>
  )
}

export default App


