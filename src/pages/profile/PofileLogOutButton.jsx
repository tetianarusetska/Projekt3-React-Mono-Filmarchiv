import { signOut } from "firebase/auth"
import { auth } from "../../firebase/config.js"
import { useNavigate } from "react-router-dom"


export default function ProfileLogOutButton() {

    const navigate = useNavigate();

    async function handleLogout() {
        await signOut(auth);
        navigate("/anmeldung");
    }

    return <button
        onClick={handleLogout}
        className="p-3 absolute right-15 mt-20 rounded-md w-42.5 h-10 flex items-center justify-center gap-2 text-(--mainColor) backdrop-blur-md bg-(--mainColor)/5 border border-(--mainColor)/20 shadow-lg transition-all duration-300 hover:bg-(--mainColor)/10 hover:scale-[1.03] active:scale-[0.98]"
    >
        Logout
    </button>
}
