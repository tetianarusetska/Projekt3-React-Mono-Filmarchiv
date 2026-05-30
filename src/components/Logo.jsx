import { useContext } from "react"
import ThemeContext from "../contexts/modeContext.js"
import { logos } from "../theme/logos"
import { Link } from "react-router-dom"

export default function Logo() {

    const { theme } = useContext(ThemeContext);

    return (
        <Link to="/">
            <img

                src={logos[theme.name]}
                alt="logo"
                className="ml-15 mt-5 w-16 h-16"
            />
        </Link>
    );
}