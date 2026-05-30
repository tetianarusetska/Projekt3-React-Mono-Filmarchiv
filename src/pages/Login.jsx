import { useAuth } from "../providers/AuthContext.jsx"
import { Link } from "react-router-dom"

import SignIn from "../components/SignIn.jsx"
import Header from "../components/Header.jsx"

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
          <Link to="/profile" className="underline">Zum Profil</Link>
        </div>
      </div>
    </div>
  );
}