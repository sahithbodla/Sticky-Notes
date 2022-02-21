import { SearchBar } from "..";
import { useThemeContext } from "../../Context/themeContext";
import { Menu, ToggleOff, ToggleOn } from "../../Svgs";
import { Navbar } from "./style";
export function Header() {
  const { theme } = useThemeContext();
  return (
    <Navbar>
      <Menu />
      <SearchBar />
        {theme==='Dark' ?<ToggleOff/>:<ToggleOn />}
      {/* </ToggleButton> */}
    </Navbar>
  );
}
