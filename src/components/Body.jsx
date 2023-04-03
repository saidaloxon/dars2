import React, {useContext, } from 'react'
import { StutendContext } from './Context'

function Body( ) {
    const [state, setState] = useContext(StutendContext)

    const onDelete=(ids)=>{
        let res = state.filter((val)=>ids!==val.id)
        setState(res)
    }

  return (
    <div>
        {
            state.map((val)=>(
              <div style={{display:'flex',marginBottom:'10px'}}>
                <h1>{val.id}</h1>
                <h1>{val.name}</h1>
                <h1>{val.title}</h1>
                <button onClick={()=>onDelete(val.id)}>delete</button>
              </div>
            ))
        }
    </div>
  )
}

export default Body