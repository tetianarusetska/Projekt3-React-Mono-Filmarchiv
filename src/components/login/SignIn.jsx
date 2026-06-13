import { useState } from "react"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../firebase/config.js"
import { Link } from "react-router-dom"

export default function SignIn() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    async function handleSubmit(e) {

        e.preventDefault();
        setError("");

        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log("Login erfolgreich!")
        } catch (err) {
            setError("Login fehlgeschlagen!");
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="text-(--mainColor) flex flex-col justify-center gap-8 text-[20px] font-light font-[Untitled] px-20 py-40 border border-(--mainColor) rounded-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl backdrop-blur-lg"
        >
            <div className="flex flex-col gap-2">
                <label
                    className=""
                >
                    E-mail
                </label>
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    className="border border-(--mainColor) w-100 h-7.5 rounded-sm"
                />
            </div>

            <div className="flex flex-col gap-2">
                <label
                    className=""
                >
                    Passwort
                </label>
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    className="border border-(--mainColor) w-100 h-7.5 rounded-sm"
                />
            </div>

            <div className="flex justify-center">
                <button
                    type="submit"
                    className="mt-5 rounded-md w-42.5 h-10 flex items-center justify-center gap-2 text-(--mainColor) backdrop-blur-md bg-(--mainColor)/5 border border-(--mainColor)/20 shadow-lg transition-all duration-300 hover:bg-(--mainColor)/10 hover:scale-[1.03] active:scale-[0.98]"
                >
                    Anmelden
                </button>
            </div>

            <div>
                <p className="text-center">Noch kein Konto?<Link to="/registrierung" className="m-1 underline">Registrieren</Link></p>
            </div>

            {error && (
                <p className="text-center">
                    {error}
                </p>
            )}
            
        </form>
    );
}