import styled from "styled-components";
import {css} from "styled-components";

const getSize = (props) => {
    switch (props.prop) {
        case "small": return "100px"
        case "medium": return "200px"
        case "large": return "300px"
        default: return "200px"
    }
}

const Conteiner = styled.div`
background-color: darkgrey;
padding: 20px;
display: flex;
gap: 15px;
`
const common = css`
    background-color: coral;
    font-size: 30px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-style: italic;
    text-align: center;
`
const Title = styled("h1")`
color: ${(props) => props.color}
${common}
`
const Item = styled.div`
    width: ${getSize};
    height: ${getSize};
    ${common}
`


export {Conteiner, Title, Item}