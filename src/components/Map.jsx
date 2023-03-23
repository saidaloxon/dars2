import React, { useState } from 'react'
import { data } from '../Mock'

function Map() {
 const [search, setSearch]= useState("");
 const [datas, setData] = useState(data);
 const [select, setSelect] = useState("id");
 const [address, setAddress] = useState("");
 const [name, setName] = useState("");
 const [active, setActive] = useState(null);
 const [names, setNames] = useState("");
 const [addresses, setAddresses] = useState("");

 const onSearch = (event) => {
    console.log(search);
    setSearch(event.target.value)
    let res = data.filter(val =>'$[val.[slect]}'.toLowerCase().includes(search))
    setData(res)
 } 
 const getSelectedVal = (e) => {
    setSelect(e.target.value)
 }
 console.log(select);
 const onDelete = (id) => {
    let result = datas.filter(val => val.id!==id)
    setData(result)
 }
 const getValueName = (e) => {
    setName(e.target.value)
 }
 const getValueAddress = (e) => {
    setAddress(e.target.value)
 }
 const onCreate = (e) => {
    let user = {
        id:Date.now(),
        name:name,
        address:address,
    }
    let res = [...datas,user];
    name && address && setData(res)
    setName("");
    setAddress("")
 }
 const onEdit = (val) => {
    setActive(val)
    setNames(val.name)
    setAddresses(val.address)
 } 
 const onSave = () => {
    let res = datas.map((val) => active.id===val.id ? {...val, name:names,address:addresses} : val)
    setData(res);
    setActive(null) 
 }
 const onChangeName = (e) => {
    setNames(e.target.value)
  }
  const onChangeAddress = (e) => {
    setAddresses(e.target.value)

  }
  return (
    <div>
        <input type="text" placeholder='name' onChange={getValueName} />
        <input type="text" placeholder='address' onChange={getValueAddress} />
        <button onClick={onCreate}>add</button>
        <br />
        <br />
        <br />
        <hr />
        <hr />
        <input type="text" placeholder='search' onChange={onSearch} />
        <select onChange = {getSelectedVal} name="" id="">
            <option value="id">id</option>
            <option value="name">name</option>
            <option value="address">address</option>
        </select>
        <table width={"70%"} border={1}>
        <thead>
            <tr>
                <th>id</th>
                <th>name</th>
                <th>address</th>
                <th>Action</th>
            </tr>
     </thead>
     <tbody>
     {
                datas.length ?
                datas.map((val)=>{
                    return(
                        <tr key = {val.id}>
                        <td>{val.id}</td>            
                        <td>{active?.id === val.id ? <input onChange={onChangeName} value={names} type="text" /> : val.name}</td>            
                        <td>{active?.id === val.id ? <input onChange={onChangeAddress} value={addresses} type="text" /> : val.address}</td>            
                        <td>
                            <button onClick={() => onDelete(val.id)}>delete</button>
                          {  active?.id === val.id ? <button onClick={onSave}>save</button> : <button onClick={()=>onEdit(val)}>edit</button>}
                        </td>            
                        </tr>
                    )
                }) : <tr>
                    <th colSpan={"4"}><h1>NO DATA</h1></th>
                </tr>
            }
     </tbody>
        </table>
    </div>
  )
}

export default Map