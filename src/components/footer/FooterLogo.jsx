import { useContext } from "react"
import ThemeContext from "../../contexts/modeContext.js"
import { logos } from "../../theme/logos"
import { Link } from "react-router-dom"

export default function FooterLogo() {
    const { theme } = useContext(ThemeContext);
    const invertedName = theme.name === "dark" ? "light" : "dark";

    return (
        <Link to="/">
            <img
                src={logos[invertedName]}
                alt="logo"
                className="w-40 h-40 absolute bottom-150 ml-130"
            />
        </Link>
    );
}