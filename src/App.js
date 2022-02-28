import React from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { Increment } from './Action/Action'
import { Decrement  } from './Action/Action'

const App = () => {
  const myState = useSelector((state)=> state.Increment)
  const mystate = useSelector((state)=> state.Decrement)
  const Dispatch = useDispatch();
  return (
    <div>
      <h1>Increment Count {myState}</h1>
        <h1>Decrement Count {mystate}</h1>
        <button onClick={()=>Dispatch(Increment())}>ADD</button>
        <button onClick={()=>Dispatch(Decrement())}>SUB</button>
    </div>
  )
}

export default App