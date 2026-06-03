import LogOutButton from "../../components/login/LogOutButton.jsx";
import { useAuth } from "../../providers/AuthContext.jsx"
import { Link } from "react-router-dom"

export default function Profile() {

    const { user } = useAuth();


    return <div
        className="h-screen w-screen flex flex-col justify-center items-center"
    >

        <div className="mt-20 flex text-[20px] font-[Untitled] gap-8 border-b border-(--mainColor) justify-between">
            <Link to="/profil/favoriten" className="pb-2 text-(--mainColor) hover:opacity-80">
                Favoriten
            </Link>
            |
            <Link to="/profil/sammlungen" className="pb-2 text-(--mainColor) hover:opacity-80">
                Sammlungen
            </Link>
        </div>

        <div
            className="mt-10 flex flex-col justify-center text-[20px] font-[Untitled] gap-7 border border-(--mainColor) w-160 h-180 px-40 py-40 rounded-2xl"
        >
            <img
                src="/icons/profile_platzhalter_dark.png"
                alt="profile_platzhalter"
                className="w-46 h-40 self-center mb-3"
            />
            <p>Dein Name: {user.displayName || "-----------"}</p>
            <p>Benutzername: @{user.username || "-----------"}</p>
            <p>Deine E-mail: {user.email}</p>
            <p>Standort: {user.location || "-----------"}</p>
            <p>Bio: {user.bio || "-----------"}</p>
            <p>Soziale Medien: {user.socials?.instagram || "-----------"}</p>
            <div className="flex flex-row gap-3">
                <button
                    className="p-3 mt-5 rounded-md w-42.5 h-10 flex items-center justify-center gap-2 text-(--mainColor) backdrop-blur-md bg-white/5 border border-white/20 shadow-lg transition-all duration-300 hover:bg-white/10 hover:scale-[1.03] active:scale-[0.98]"
                >
                    <Link to="/profil/bearbeiten">Bearbeiten</Link>
                </button>
                <LogOutButton />
            </div>
        </div>

    </div>
}