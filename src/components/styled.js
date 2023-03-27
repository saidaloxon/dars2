import styled,{keyframes} from "styled-components";

const Container = styled.div`
    display: flex;
`
const rotate = keyframes`
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
`
const Button = styled.div`
    width: 200px;
    height: 50px;
    background-color: coral;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;
    cursor: pointer;
    margin: 15px;
    :active{
        transform: scale(.97);
    }
`;
const NewButton = styled(Button)`
height: 60px;
`

const Rotate = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    border: 2px solid red;
    animation: ${rotate} linear 2s infinite;
    :active{
        animation: ${rotate} linear 2s ;
    }
`

export {Container,Button,NewButton,Rotate}