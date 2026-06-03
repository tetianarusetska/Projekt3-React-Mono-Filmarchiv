import { Link } from "react-router-dom"

const mockFavorites = [
    { id: 1, title: "Samml. 1" },
    { id: 2, title: "Samml. 2" },
    { id: 3, title: "Samml. 3" },
    { id: 4, title: "Samml. 4" },
    { id: 5, title: "Samml. 5" },
    { id: 6, title: "Samml. 6" },
    { id: 7, title: "Samml. 7" },
    { id: 8, title: "Samml. 8" },
    { id: 9, title: "Samml. 9" },
];


export default function Collections() {
    return (
        <div className="flex flex-col">

            <div className="mt-20 flex flex-row text-[20px] font-[Untitled] justify-center">
                <div className="flex gap-8 border-b border-(--mainColor) px-8 pb-2">
                    <Link to="/profil" className="text-(--mainColor) hover:opacity-80">Profil</Link>
                    |
                    <Link to="/profil/favoriten" className="text-(--mainColor) hover:opacity-80">Favoriten</Link>
                </div>
                
            </div>

            <h1 className="ml-20 mt-10 pb-2 text-(--mainColor) text-[20px] font-[Untitled] border-b border-(--mainColor) w-fit">
                Sammlungen
            </h1>

            <div className="mt-10 mx-20 grid grid-cols-3 border border-(--mainColor) rounded-2xl">
                {mockFavorites.map((foto) => (
                    <div
                        key={foto.id}
                        className="h-120 border border-(--mainColor) flex items-center justify-center text-(--mainColor) rounded-2xl"
                    >
                        {foto.title}
                    </div>
                ))}
            </div>

        </div>
    );
}



