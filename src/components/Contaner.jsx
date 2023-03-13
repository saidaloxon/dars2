import React from 'react'
import Card from './Card'
import './Style.css'
import './Icons.css'

const data =[
{id:1, title: 'banan' , info: 'yeyish kerak', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4xBnRRsnpTltOvwQjrtx4-1xGRiFR85ewww&usqp=CAU'},
{id:2, title: 'banan' , info: 'yeyish kerak', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4xBnRRsnpTltOvwQjrtx4-1xGRiFR85ewww&usqp=CAU'},
{id:3, title: 'banan' , info: 'yeyish kerak', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4xBnRRsnpTltOvwQjrtx4-1xGRiFR85ewww&usqp=CAU'},
{id:4, title: 'banan' , info: 'yeyish kerak', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4xBnRRsnpTltOvwQjrtx4-1xGRiFR85ewww&usqp=CAU'},
{id:4, title: 'banan' , info: 'yeyish kerak', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4xBnRRsnpTltOvwQjrtx4-1xGRiFR85ewww&usqp=CAU'},
{id:5, title: 'banan' , info: 'yeyish kerak', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4xBnRRsnpTltOvwQjrtx4-1xGRiFR85ewww&usqp=CAU'},
{id:6, title: 'banan' , info: 'yeyish kerak', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4xBnRRsnpTltOvwQjrtx4-1xGRiFR85ewww&usqp=CAU'},
{id:6, title: 'banan' , info: 'yeyish kerak', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4xBnRRsnpTltOvwQjrtx4-1xGRiFR85ewww&usqp=CAU'},
{id:6, title: 'banan' , info: 'yeyish kerak', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4xBnRRsnpTltOvwQjrtx4-1xGRiFR85ewww&usqp=CAU'},
{id:6, title: 'banan' , info: 'yeyish kerak', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4xBnRRsnpTltOvwQjrtx4-1xGRiFR85ewww&usqp=CAU'},
{id:6, title: 'banan' , info: 'yeyish kerak', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4xBnRRsnpTltOvwQjrtx4-1xGRiFR85ewww&usqp=CAU'},
{id:6, title: 'banan' , info: 'yeyish kerak', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4xBnRRsnpTltOvwQjrtx4-1xGRiFR85ewww&usqp=CAU'},
{id:6, title: 'banan' , info: 'yeyish kerak', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4xBnRRsnpTltOvwQjrtx4-1xGRiFR85ewww&usqp=CAU'},
{id:7, title: 'banan' , info: 'yeyish kerak', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4xBnRRsnpTltOvwQjrtx4-1xGRiFR85ewww&usqp=CAU'},
{id:8, title: 'banan' , info: 'yeyish kerak', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4xBnRRsnpTltOvwQjrtx4-1xGRiFR85ewww&usqp=CAU'},
]

function Contaner() {
  return (
    <div className='Contaner'>
    {data.map((val) => 
    (<Card src={val.src} title={val.title} info={val.info}/> ))} 

      
    </div>
  )
}

export default Contaner