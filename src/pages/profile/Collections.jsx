import { Link, Navigate, useNavigate } from "react-router-dom"
import { useAuth } from "../../providers/AuthContext.jsx"

const sammlungen = [
    { id: "stadt-architektur", name: "Stadt & Architektur" },
    { id: "natur-landschaft", name: "Natur & Landschaft" },
    { id: "portrait", name: "Portrait" },
    { id: "licht-schatten", name: "Licht & Schatten" },
]

export default function Collections() {

    const { user } = useAuth();
    const navigate = useNavigate();

    if (!user) return <Navigate to="/anmeldung" />

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

            <div className="mt-30 mx-20 grid grid-cols-2 gap-10">
                {sammlungen.map((col) => (
                    <div
                        key={col.id}
                        onClick={() => navigate(`/profil/sammlungen/${col.id}`)}
                        className="h-60 border border-(--mainColor) flex items-center justify-center text-(--mainColor) font-[Untitled] text-[20px] rounded-2xl cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl backdrop-blur-lg"
                    >
                        {col.name}
                    </div>
                ))}
            </div>

        </div>
    );
}