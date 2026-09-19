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
           className="flex flex-row leading-[1.2em] font-light font-[Untitled] w-full justify-between px-4 mt-1 text-[17px] md:w-auto md:justify-start md:px-0 md:mt-15 md:text-[23px] md:gap-5"
        >
            {links.map((link, index) => (
                <Link key={index} to={link.target}>
                    {link.displayName}
                </Link>
            ))}
        </nav>
    );
}