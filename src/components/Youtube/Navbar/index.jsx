import React from 'react'
import { Container, Category, Icon } from './styled'

function Navbar() {
  return (
    <Container>
      <Category>
        <Icon.Menu/>
      </Category>
      <Category>search</Category>
      <Category>menu</Category>
    </Container>
  )
}

export default Navbar