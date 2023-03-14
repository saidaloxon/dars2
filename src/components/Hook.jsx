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
    <div>
        <h1>event {count}</h1>
        <button onClick={() => setCount(count+1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
        <h1>name: {title}</h1>
        <h1>gender: {gender}</h1>
        <h1>gender: {check && "checked"}</h1>
        <input type="text" onChange={onChange} />
        <select onChange={onSelect} name="" id="">
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