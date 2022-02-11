import { createContext, useContext, useState } from "react";

export const ThemeContext=createContext();
export const ThemeProvider=({children})=>{
    const [theme, setTheme] = useState(false);
    return(
        <ThemeContext.Provider value={{theme,setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
export const useThemeContext=()=>{
    return useContext(ThemeContext)
}
