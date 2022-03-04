import { SearchSvg } from "../../Svgs";
import { Input, Search, SearchButton } from "./search.style";
export function SearchBar({ setSearchText }) {
  return (
    <Search>
      <Input
        onInput={(event) => setSearchText(event.target.value)}
        placeholder="Search Notes"
      />
      <SearchButton>
        <SearchSvg />
      </SearchButton>
    </Search>
  );
}
