import { SearchBar } from "..";
import { useThemeContext } from "../../Context/themeContext";
import { ToggleOff, ToggleOn } from "../../Svgs";
import { Logo, Navbar } from "./header.style";
export function Header({setSearchText}) {
  const { theme } = useThemeContext();
  return (
    <Navbar>
      {/* <Menu /> */}
      <Logo>Sticky Notes</Logo>
      <SearchBar setSearchText={setSearchText}/>
        {theme==='Dark' ?<ToggleOff/>:<ToggleOn />}
    </Navbar>
  );
}
