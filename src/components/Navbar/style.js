import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
display: flex;
justify-content: space-evenly;
background-color: black;
color: white;
height: 50px;
align-items: center;
`
export const Link = styled(NavLink)`
color: white;
text-decoration:none;
`