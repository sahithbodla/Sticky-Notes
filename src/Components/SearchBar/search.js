// import { SearchSvg } from "../../Svgs";
import styled from "styled-components";
import { SearchSvg } from "../../Svgs";
import { ToggleButton } from "../Header/style";
export const Search= styled.div`
position:relative;
display:flex;
background-color:var(--primary-color);
padding:0.2rem;
border-radius:0.5rem 
`
export const Input=styled.input`
padding:0.5rem;
border:0;
outline:none;
width:20rem;
font-weight:bold;
color:var(--secondary-color)

`
export const SearchButton=styled(ToggleButton)`
    color:var(--secondary-color)

`

export function SearchBar(){
    return(
        <Search>
            <SearchButton>
                <SearchSvg/>
            </SearchButton>
            <Input placeholder='Search Notes'/>
        </Search>
    )
  }