import styled from "styled-components";
import {ReactComponent as menu} from '../../../assets/image/menu/logo.png'

const Container = styled.div`
display: flex;
justify-content: space-between;
height: 60px;
border: 1px solid red;
align-items: center;
`
const Category = styled.div`

`
const Icon = styled.div``;
Icon.Menu = styled(menu)``
Icon.Logo = styled.img``;

export {Container, Category, Icon  }