import { useContext, useState } from "react"
import { icons } from "../../theme/profileIcons"
import { Link } from "react-router-dom"
import { useAuth } from "../../providers/AuthContext.jsx"
import { signOut } from "firebase/auth"
import { auth } from "../../firebase/config.js"

import ThemeContext from "../../contexts/modeContext.js"


export default function ProfileIcons() {

  const { theme } = useContext(ThemeContext);
  const { user } = useAuth();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="absolute top-13.5 right-22">
      <img
        src={icons[theme.name]}
        alt="Profile Icon"
        className="w-10 h-10 cursor-pointer"
        onClick={() => setShowMenu(!showMenu)}
      />

      {showMenu && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setShowMenu(false)}
          />

          <div className="absolute top-12 right-0 bg-(--bgColor) border border-(--mainColor) rounded-xl p-4 flex flex-col gap-2 font-[Untitled] text-(--mainColor) w-48 z-50">

            {!user ? (
              <>
                <Link to="/anmeldung" onClick={() => setShowMenu(false)}
                  className="px-3 py-1 hover:bg-(--mainColor)/10 rounded-md transition">
                  Anmelden
                </Link>
                <Link to="/registrierung" onClick={() => setShowMenu(false)}
                  className="px-3 py-1 hover:bg-(--mainColor)/10 rounded-md transition">
                  Registrieren
                </Link>
              </>
            ) : (
              <>
                <Link to="/profil" onClick={() => setShowMenu(false)}
                  className="px-3 py-1 hover:bg-(--mainColor)/10 rounded-md transition">
                  Zum Profil
                </Link>
                <Link to="/profil/favoriten" onClick={() => setShowMenu(false)}
                  className="px-3 py-1 hover:bg-(--mainColor)/10 rounded-md transition">
                  Favoriten
                </Link>
                <Link to="/profil/sammlungen" onClick={() => setShowMenu(false)}
                  className="px-3 py-1 hover:bg-(--mainColor)/10 rounded-md transition">
                  Sammlungen
                </Link>
                <Link to="/profil/warenkorb" onClick={() => setShowMenu(false)}
                  className="px-3 py-1 hover:bg-(--mainColor)/10 rounded-md transition">
                  Warenkorb
                </Link>
                <button
                  onClick={() => { signOut(auth); setShowMenu(false); }}
                  className="text-left px-3 py-1 hover:bg-(--mainColor)/10 rounded-md transition"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}