import { createContext } from "react"
import { darkTheme } from "../theme/modeTheme.js"

const ThemeContext = createContext(darkTheme);

export default ThemeContext;