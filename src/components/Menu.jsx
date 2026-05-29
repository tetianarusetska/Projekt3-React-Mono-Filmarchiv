import { Link } from "react-router-dom"


export default function Menu() {

    const links = [
        { target: "/fotos", displayName: "Fotos" },
        { target: "/fotografen", displayName: "Fotografen" },
        { target: "/drucke", displayName: "Drucke" },
        { target: "/artikel", displayName: "Artikel" },
    ]

    return (
        <nav
            className="flex flex-row leading-[1.2em] text-[23px] font-light font-[Untitled] mt-15 gap-5"
        >
            {links.map((link, index) => (
                <Link key={index} to={link.target}>
                    {link.displayName}
                </Link>
            ))}
        </nav>
    );
}