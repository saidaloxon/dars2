import React from 'react'
import { useReducer } from 'react'
import { useState } from 'react'

function Reducer() {
    const [state, setState] = useState(0)
    const [counter, dispatch] = useReducer((state,action)=>{
        switch (action.type) {
            case "plus":
                return state+2;
             case "minus":
                 return state-2; 
            case "besh":
                return state+5;                       
            default: return state
        }
    }, 0)
    const Inc = () => {
        setState(state+1)
    }
    const Dec = () => {
        setState(state-1)
    }

  return (
    <div>
        <h1>State {state}</h1>
        <button onClick={Inc}>++</button>
        <button onClick={Dec}>--</button>
        <h1>Counter {counter}</h1>
        <button onClick={() => dispatch({type:"plus"})} >add</button>
        <button onClick={() => dispatch({type:"minus"})} >dec</button>
        <button onClick={() => dispatch({type:"besh"})} >5</button>
    </div>
  )
}

export default Reducer