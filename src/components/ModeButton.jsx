import { useContext } from "react";

import ThemeContext from "../contexts/modeContext.js";

export default function ModeButton() {

    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button
            onClick={toggleTheme}
            className="bg-transparent border-0 p-0 m-0 outline-none shadow-none absolute top-10 right-15"
        >
            <img
                src={theme.name === "light" ? "/icons/light.svg" : "/icons/dark.svg"}
                alt="theme icon"
                className="w-6 h-6"
            />
        </button>
    );
}


