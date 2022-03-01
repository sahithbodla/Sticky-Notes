import styled from "styled-components";
import { ToggleButton } from "../Header/header.style";
export const Search= styled.div`
position:relative;
display:flex;
justify-content:center;
background-color:var(--primary-color);
padding:0.5rem;
width:600px;
border-radius:0.5rem 
`
export const Input=styled.input`
padding:0.5rem;
border:0;
outline:none;
width:530px;
font-size:larger;
font-weight:bold;
color:var(--secondary-color);
background-color:var(--primary-color)

`
export const SearchButton=styled(ToggleButton)`
    position:absolute;
    left:0;
    color:var(--secondary-color)

`