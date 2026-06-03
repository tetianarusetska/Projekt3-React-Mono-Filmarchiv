import { Link } from "react-router-dom"

const mockFavorites = [
    { id: 1, title: "Foto 1" },
    { id: 2, title: "Foto 2" },
    { id: 3, title: "Foto 3" },
    { id: 4, title: "Foto 4" },
    { id: 5, title: "Foto 5" },
    { id: 6, title: "Foto 6" },
    { id: 7, title: "Foto 7" },
    { id: 8, title: "Foto 8" },
    { id: 9, title: "Foto 9" },
];


export default function Favorites() {
    return (
        <div className="flex flex-col">

            <div className="mt-20 flex flex-row text-[20px] font-[Untitled] justify-center">
                <div className="flex gap-8 border-b border-(--mainColor) px-8 pb-2">
                    <Link to="/profil" className="text-(--mainColor) hover:opacity-80">Profil</Link>
                    |
                    <Link to="/profil/sammlungen" className="text-(--mainColor) hover:opacity-80">Sammlungen</Link>
                </div>
            </div>

            <h1 className="ml-20 mt-10 pb-2 text-(--mainColor) text-[20px] font-[Untitled] border-b border-(--mainColor) w-fit">
                Favoriten
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



