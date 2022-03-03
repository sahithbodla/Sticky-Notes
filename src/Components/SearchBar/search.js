import { SearchSvg } from "../../Svgs";
import { Input, Search, SearchButton } from "./search.style";
export function SearchBar({setSearchText}){
    return(
        <Search>
            <SearchButton>
                <SearchSvg/>
            </SearchButton>
            <Input onInput={(event)=>setSearchText(event.target.value)} placeholder='Search Notes'/>
            
        </Search>
    )
  }