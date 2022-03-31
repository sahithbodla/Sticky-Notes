import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    JSON.parse(localStorage?.getItem("theme")) || "Dark");
  themeChanger(theme);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
export const useThemeContext = () => {
  return useContext(ThemeContext);
};
export function themeChanger(theme) {
  localStorage.setItem("theme", JSON.stringify(theme));
  theme === "Light"
    ? document.documentElement.setAttribute("data-theme", "light")
    : document.documentElement.setAttribute("data-theme", "dark");
}
