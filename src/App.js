import React from 'react'
import Main from './MainState'
import UseStateArray from './array/UseStateArray'
import UseStateObject from './object/UseStateObject'
import Counter from './counter/Counter'


const App = () => {
  return (
    <div>
       <Main /> 
       <br />
       <UseStateObject />
       {/* <br />
       <Counter /> */}
    </div>
  )
}

export default App


