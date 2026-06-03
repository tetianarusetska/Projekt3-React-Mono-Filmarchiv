import { useAuth } from "../../providers/AuthContext.jsx"
import { Link } from "react-router-dom"

import SignIn from "../../components/login/SignIn.jsx"
import Header from "../../components/header/Header.jsx"
import LogOutButton from "../../components/login/LogOutButton.jsx"

export default function Login() {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="h-screen w-screen flex flex-col">
        <Header />
        <div className="flex flex-col justify-center items-center gap-15 mt-30">
          <SignIn />
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen w-screen flex flex-col">
      <Header />
      <div className="flex-1 flex justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-8 w-150 h-80 px-20 py-10 border border-(--mainColor) rounded-xl text-[20px] font-light font-[Untitled] text-center">
          <h1 className="text-(--mainColor)">
            Willkommen, {user.email}!
          </h1>
          <div className="flex flex-row gap-3">
            <button
              className="p-3 mt-5 rounded-md w-42.5 h-10 flex items-center justify-center gap-2 text-(--mainColor) backdrop-blur-md bg-white/5 border border-white/20 shadow-lg transition-all duration-300 hover:bg-white/10 hover:scale-[1.03] active:scale-[0.98]"
            >
              <Link to="/profil">Zum Profil</Link>
            </button>
            <LogOutButton />
          </div>
        </div>
      </div>
    </div>
  );
}