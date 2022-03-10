import { SearchSvg } from "../../Svgs";
import { Input, Search } from "./search.style";
export function SearchBar({searchText, setSearchText }) {
  return (
    <Search>
          <SearchSvg />
      <Input
        value={searchText}
        onInput={(event) => setSearchText(event.target.value)}
        placeholder="Search Notes.."
      />
    {searchText!=='' && <svg onClick={() => setSearchText('')} width="1.5em" height="1.5em" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
        ></path>
      </svg>}
    </Search>
  );
}
