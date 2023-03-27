import React, {useState} from 'react'
import {Button, Container, NewButton, Rotate} from './styled'
import {ThemeProvider, createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body{
    background: ${(props)=>props.theme.bg};
    color: ${(props)=>props.theme.cl};
  }
`

function StyledCom() {
  const [light, setLight] = useState(false);
  const theme = {
    bg:light?'white':'black',
    cl:light?'black':'white',
  }
  const onChanges = () => {
    setLight(!light)
}

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Button>Click me</Button>
        <NewButton>New Button</NewButton>
        <Rotate>
          <a href="#" >rotate</a>
        </Rotate>
      </Container>
      <NewButton onClick={onChanges}>change lightness</NewButton>
    </ThemeProvider>
  )
}

export default StyledCom