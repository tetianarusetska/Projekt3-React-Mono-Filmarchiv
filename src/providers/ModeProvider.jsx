import { useState } from "react"
import ThemeContext from "../contexts/modeContext.js"
import { darkTheme, lightTheme } from "../theme/modeTheme.js"

export default function ModeProvider({ children }) {
    
    const [theme, setTheme] = useState(darkTheme);


    function toggleTheme() {
        setTheme(prev => {
            const newTheme = prev.name === "dark" ? lightTheme : darkTheme;

            document.documentElement.setAttribute(
                "data-theme",
                newTheme.name
            );

            return newTheme;
        });
    }


    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}