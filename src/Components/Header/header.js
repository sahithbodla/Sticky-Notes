import { SearchBar } from "..";
import { useThemeContext } from "../../Context/themeContext";
import { ToggleOff, ToggleOn } from "../../Svgs";
import { Navbar } from "./header.style";
export function Header() {
  const { theme } = useThemeContext();
  return (
    <Navbar>
      {/* <Menu /> */}
      <h2>Sticky Notes</h2>
      <SearchBar />
        {theme==='Dark' ?<ToggleOff/>:<ToggleOn />}
    </Navbar>
  );
}
