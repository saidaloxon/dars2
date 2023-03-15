import React, { useState } from 'react'
import { data } from '../Mock'

function Map() {
 const [search, setSearch]= useState("")
 const [datas, setData] = useState(datas)
 const onSearch = (event) => {
    console.log(search);
    setSearch(event.target.value)
    let res = data.filter(val => val.name.includes(search))
    setData(res)
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
            </tr>
            {
                datas.map((val, inx)=>{
                    return(
                        <tr key = {val.id}>
                        <td>{val.id}</td>            
                        <td>{val.age}</td>            
                        <td>{val.name}</td>            
                        <td>{val.address}</td>            
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