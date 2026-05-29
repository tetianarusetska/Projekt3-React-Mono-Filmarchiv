import { useContext } from "react";
import ThemeContext from "../contexts/modeContext.js";
import { logos } from "../theme/logos";

export default function Logo() {
    
    const { theme } = useContext(ThemeContext);

    return (
        <img
            src={logos[theme.name]}
            alt="logo"
            className="ml-15 mt-5 w-16 h-16"
        />
    );
}