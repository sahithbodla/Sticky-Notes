import { SearchBar } from "..";
import { useThemeContext } from "../../Context/themeContext";
import { ToggleOff, ToggleOn } from "../../Svgs";
import { Navbar } from "./header.style";
export function Header({setSearchText}) {
  const { theme } = useThemeContext();
  return (
    <Navbar>
      {/* <Menu /> */}
      <h2>Sticky Notes</h2>
      <SearchBar setSearchText={setSearchText}/>
        {theme==='Dark' ?<ToggleOff/>:<ToggleOn />}
    </Navbar>
  );
}
