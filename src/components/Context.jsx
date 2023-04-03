import React, {createContext, useState} from 'react'

export const StutendContext = createContext()

function StudentList({children}) {
    const data = [
        {id:1,name:"Jasur",title:'IT'},
        {id:2,name:"Jasurbek",title:'IT'},
        {id:3,name:"Jasurjon",title:'IT'},
        {id:4,name:"Jamshid",title:'IT'},
        {id:5,name:"Jamshidbek",title:'IT'},
        {id:6,name:"Islom",title:'IT'},
        {id:7,name:"Javohir",title:'IT'},
        {id:8,name:"Jasur",title:'IT'},
    ]

    const [state, setState] = useState(data)

  return (
    <StutendContext.Provider value={[state, setState]}>{children}</StutendContext.Provider>
  )
}

export default StudentList