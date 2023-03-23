import React from 'react'
import './style.css'
import { Conteiner, Item, Title } from './styled'

function Stylecom() {
  return (
    <Conteiner>
        <Title color='blue'>Stylecom</Title>
        <Title color='yellow'>Stylecom</Title>
        <Item prop="small">Small</Item>
        <Item prop="medium">Medium</Item>
        <Item prop="large">large</Item>
        <Item prop="xlarge">large</Item>
    </Conteiner>
  )
}

export default Stylecom