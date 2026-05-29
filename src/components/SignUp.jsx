import { useState } from "react"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase/config.js"

export default function SignUp() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    async function handleSubmit(e) {

        e.preventDefault();
        setError("");

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            console.log("Login erfolgreich!")
        } catch (err) {
            setError("Login fehlgeschlagen");
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="text-(--mainColor) flex flex-col justify-center gap-5 text-[20px] font-light font-[Untitled"
        >
            <div className="flex flex-col gap-2">
                <label>E-mail</label>
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    className="border border-(--mainColor) w-100 h-7.5"
                />
            </div>
            <div className="flex flex-col gap-2">
                <label>Passwort</label>
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    className="border border-(--mainColor) w-100 h-7.5"
                />
            </div>

            <div className="flex justify-center">
                <button
                    type="submit"
                    className="w-42.5 h-10 flex items-center justify-center gap-2 text-(--mainColor) backdrop-blur-md bg-white/10 border border-white/20 shadow-lg transition-all duration-300 hover:bg-white/20 hover:scale-[1.03] active:scale-[0.98]"
                >
                    Registrieren
                </button>
            </div>

            {error && error}
        </form>
    );
}