import { useContext } from "react"
import ThemeContext from "../../contexts/modeContext.js"
import { icons } from "../../theme/profileIcons"
import { Link } from "react-router-dom"

export default function ProfileIcons() {

  const { theme } = useContext(ThemeContext);

  return (
    <Link to="/login">
      <img
        src={icons[theme.name]}
        alt="Profile Icon"
        className="absolute top-13.5 right-22 w-10 h-10"
      />
    </Link>
  );
}