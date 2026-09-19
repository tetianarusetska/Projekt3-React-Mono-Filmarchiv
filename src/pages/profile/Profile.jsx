import LogOutButton from "../../components/login/LogOutButton.jsx";
import { useAuth } from "../../providers/AuthContext.jsx"
import { Link, Navigate } from "react-router-dom"

export default function Profile() {

    const { user } = useAuth();

    if (!user) return <Navigate to="/anmeldung" />

    return <div className="min-h-screen w-full flex flex-col justify-center items-center px-4 py-10 lg:h-screen lg:w-screen lg:px-0 lg:py-0">
        <div className="mt-6 lg:mt-20 flex flex-wrap justify-center text-[16px] lg:text-[20px] font-[Untitled] gap-3 lg:gap-8 border-b border-(--mainColor)">
            <Link to="/profil/favoriten" className="pb-2 text-(--mainColor) hover:opacity-80">
                Favoriten
            </Link>
            |
            <Link to="/profil/sammlungen" className="pb-2 text-(--mainColor) hover:opacity-80">
                Sammlungen
            </Link>
            |
            <Link to="/profil/warenkorb" className="pb-2 text-(--mainColor) hover:opacity-80">
                Warenkorb
            </Link>
        </div>

        <div
            className="mt-6 lg:mt-10 flex flex-col justify-center text-[16px] lg:text-[20px] font-[Untitled] gap-4 lg:gap-7 border border-(--mainColor) w-full max-w-md lg:max-w-none lg:w-160 h-auto lg:h-180 px-6 py-8 lg:px-40 lg:py-40 rounded-2xl transition-all duration-300 lg:hover:-translate-y-2 hover:shadow-2xl backdrop-blur-lg break-words"
        >
            <img
                src="/icons/profile_platzhalter_dark.png"
                alt="profile_platzhalter"
                className="w-32 h-28 lg:w-46 lg:h-40 object-contain self-center mb-3"
            />
            <p>Dein Name: {user.displayName || "-----------"}</p>
            <p>Benutzername: @{user.username || "-----------"}</p>
            <p>Deine E-mail: {user.email}</p>
            <p>Standort: {user.location || "-----------"}</p>
            <p>Bio: {user.bio || "-----------"}</p>
            <p>Soziale Medien: {user.socials?.instagram || "-----------"}</p>
            <div className="flex flex-row flex-wrap justify-center gap-3">
                <Link
                    to="/profil/bearbeiten"
                    className="p-3 mt-5 rounded-md w-42.5 h-10 flex items-center justify-center gap-2 text-(--mainColor) backdrop-blur-md bg-(--mainColor)/5 border border-(--mainColor)/20 shadow-lg transition-all duration-300 hover:bg-(--mainColor)/10 hover:scale-[1.03] active:scale-[0.98]"
                >
                    Bearbeiten
                </Link>
                <LogOutButton />
            </div>
        </div>

    </div>
}
