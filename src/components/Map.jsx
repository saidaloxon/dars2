import React, { useState } from 'react'
import { data } from '../Mock'

function Map() {
 const [search, setSearch]= useState("")
 const [datas, setData] = useState(data)
 const onSearch = (event) => {
    console.log(search);
    setSearch(event.target.value)
    let res = data.filter(val => val.name.includes(search))
    setData(res)
 } 
 const onDelete = (id) => {
    let result = datas.filter(val => val.id!==id)
    setData(result)
 }
  return (
    <div>
        <input type="text" placeholder='search' onChange={onSearch} />
        <table border={1}>
        <thead>
            <tr>
                <th>id</th>
                <th>age</th>
                <th>name</th>
                <th>address</th>
                <th>Action</th>
            </tr>
            {
                datas.map((val)=>{
                    return(
                        <tr key = {val.id}>
                        <td>{val.id}</td>            
                        <td>{val.age}</td>            
                        <td>{val.name}</td>            
                        <td>{val.address}</td>            
                        <td>
                            <button onClick={() => onDelete(val.id)}>delete</button>
                        </td>            
                        </tr>
                    )
                })
            }
        </thead>
        </table>
    </div>
  )
}

export default Map