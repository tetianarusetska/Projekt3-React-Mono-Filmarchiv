import { useContext } from "react"
import ThemeContext from "../../contexts/modeContext.js"
import { logos } from "../../theme/logos"
import { Link } from "react-router-dom"

export default function Logo() {

    const { theme } = useContext(ThemeContext);

    return (
        <Link to="/">
            <img

                src={logos[theme.name]}
                alt="logo"
                className="ml-4 mt-4 w-12 h-12 md:ml-15 md:mt-5 md:w-16 md:h-16"
            />
        </Link>
    );
}