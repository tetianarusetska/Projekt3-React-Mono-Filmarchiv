import { useState } from "react"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase/config.js"

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
            setError("Login fehlgeschlagen");
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="text-(--mainColor) flex flex-col justify-center gap-5 text-[20px] font-light font-[Untitled"
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
                    className="border border-(--mainColor) w-100 h-7.5"
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
                    className="border border-(--mainColor) w-100 h-7.5"
                />
            </div>

            <div className="flex justify-center">
                <button
                    type="submit"
                    className=""
                >
                    Anmelden
                </button>
            </div>

            {error && error}
        </form>
    );
}