import { SearchSvg } from "../../Svgs";
import { Input, Search, SearchButton } from "./search.style";
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