import { SearchBar } from "..";
import { useThemeContext } from "../../Context/themeContext";
import { ToggleOff, ToggleOn } from "../../Svgs";
import { Logo, Navbar } from "./header.style";
export function Header({searchText,setSearchText}) {
  const { theme } = useThemeContext();
  return (
    <Navbar>
      {/* <Menu /> */}
      <Logo>Sticky NoteZ</Logo>
      <SearchBar searchText={searchText} setSearchText={setSearchText}/>
        {theme==='Dark' ?<ToggleOff/>:<ToggleOn />}
    </Navbar>
  );
}
