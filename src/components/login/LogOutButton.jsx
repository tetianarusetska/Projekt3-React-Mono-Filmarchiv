import { signOut } from "firebase/auth"
import { auth } from "../../firebase/config.js"


export default function LogOutButton() {
    return <button
        onClick={() => signOut(auth)}
        className="p-3 mt-5 rounded-md w-42.5 h-10 flex items-center justify-center gap-2 text-(--mainColor) backdrop-blur-md bg-white/5 border border-white/20 shadow-lg transition-all duration-300 hover:bg-white/10 hover:scale-[1.03] active:scale-[0.98]"
    >
        Logout
    </button>
}
