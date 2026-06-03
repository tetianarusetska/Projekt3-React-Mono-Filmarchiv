import { useState } from "react"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../firebase/config.js"
import { Link } from "react-router-dom"

export default function SignUp() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    async function handleSubmit(e) {

        e.preventDefault();
        setError("");

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            console.log("Anmeldung erfolgreich!")
        } catch (err) {
            setError("Anmeldung fehlgeschlagen!");
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="text-(--mainColor) flex flex-col justify-center gap-8 text-[20px] font-light font-[Untitled] px-20 py-40 border border-(--mainColor) rounded-xl"
        >
            <div className="flex flex-col gap-2">
                <label>E-mail</label>
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    className="border border-(--mainColor) w-100 h-7.5 rounded-sm"
                />
            </div>
            <div className="flex flex-col gap-2">
                <label>Passwort</label>
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
                    className="rounded-md mt-5 w-42.5 h-10 flex items-center justify-center gap-2 text-(--mainColor) backdrop-blur-md bg-white/5 border border-white/20 shadow-lg transition-all duration-300 hover:bg-white/10 hover:scale-[1.03] active:scale-[0.98]"
                >
                    Registrieren
                </button>
            </div>

            <div>
                <p className="text-center">Bereits registriert?<Link to="/anmeldung" className="m-1 underline">Anmelden</Link></p>
            </div>

            {error && (
                <p className="text-center">
                    {error}
                </p>
            )}

        </form>
    );
}