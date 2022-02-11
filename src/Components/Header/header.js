import { SearchBar } from "..";
import { useThemeContext } from "../../Context/themeContext";
import { Menu, ToggleOff, ToggleOn } from "../../Svgs";
import { Navbar, ToggleButton } from "./style";

function themeChanger(theme, setTheme) {
  theme
    ? document.documentElement.setAttribute("data-theme", "light")
    : document.documentElement.setAttribute("data-theme", "dark");
  setTheme((flag) => !flag);
}


export function Header() {
  const {theme, setTheme}=useThemeContext()
  return (
    <Navbar>
      <Menu />
      <SearchBar/>
      <ToggleButton onClick={() => themeChanger(theme, setTheme)}>
        {theme ? <ToggleOn /> : <ToggleOff />}
      </ToggleButton>
    </Navbar>
  );
}
