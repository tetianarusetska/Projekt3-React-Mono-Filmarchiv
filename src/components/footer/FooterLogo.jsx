import { useContext } from "react"
import { logos } from "../../theme/logos"
import { Link } from "react-router-dom"

import ThemeContext from "../../contexts/modeContext.js"

export default function FooterLogo() {

    const { theme } = useContext(ThemeContext);
    const oppositeName = theme.name === "dark" ? "light" : "dark";

    return (
        <Link to="/">
            <img
                src={logos[oppositeName]}
                alt="logo"
                className="w-40 h-40 absolute bottom-150 ml-130"
            />
        </Link>
    );
}