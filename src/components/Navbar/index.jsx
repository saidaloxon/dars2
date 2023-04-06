import React from 'react'
import { Container, Link } from './style'


function Navbar() {
  return (
    <Container>
        <Link activeStyle={{color:"coral"}} to={'/'}>Logo</Link>
        <Link activeStyle={{color:"coral"}} to={'/home'}>Home</Link>
        <Link activeStyle={{color:"coral"}} to={'/contact'}>contact</Link>
        <Link activeStyle={{color:"coral"}} to={'/category'}>Category</Link>
        <Link activeStyle={{color:"coral"}} to={'/about'}>About</Link>
        <Link activeStyle={{color:"coral"}} to={'/news'}>News</Link>
        <Link activeStyle={{color:"coral"}} to={'/sport'}>Sport</Link>
    </Container>
  )
}

export default Navbar