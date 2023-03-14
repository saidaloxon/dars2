import React, { useState } from 'react'


function Hook() {
    const [ count, setCount] = useState(0);
    const [title, setTitle] = useState("text")
    const [gender, setGender] = useState("")
    const [check, setCheck] = useState(false)
    const onChange = (e) => {
        setTitle(e.target.value)
    }
    const onSelect = (e) => {
        setGender(e.target.value)
        console.log(e.target.value);
    } 
    const onCheck = (e) => {
        setCheck(e.target.checked)
        console.log(e.target.value);
    }
  return (
    <div className='for'>
        <h1>event {count}</h1>
        <button className='read' onClick={() => setCount(count+1)}>+</button>
        <button className='read1' onClick={() => setCount(count - 1)}>-</button>
        <h1>name: {title}</h1>
        <h1 className='youfor'>gender: {gender}</h1>
        <h1>gender: {check && "checked"}</h1>
        <input className='foryou' type="text" onChange={onChange} />
        <select className='you' onChange={onSelect} name="" id="">
            <option value="males">male</option>
            <option value="females">females</option>
            <option value="uncknown">uncknows</option>
        </select> <br />
        <label htmlFor="check">check</label>
        <input onChange={onCheck} type="Checkbox" />
    </div>
  )
}

export default Hook