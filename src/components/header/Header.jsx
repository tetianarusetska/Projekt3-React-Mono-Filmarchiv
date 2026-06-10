import Logo from "./Logo.jsx"
import Menu from "./Menu.jsx"
import ModeButton from "./ModeButton.jsx"
import ProfileIcons from "./ProfileIcon.jsx"

export default function Header() {
    return (
        <div className="flex flex-row gap-5">
            <Logo />
            <Menu />
            <ModeButton />
            <ProfileIcons />
        </div>
    );
}