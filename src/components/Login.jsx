import { useState } from "react"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase/config.js"

export default function Login() {

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
        className="text-(--mainColor)"
        >

            <label>E-mail</label>
            <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text" />

            <label>Passwort</label>
            <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password" />

            <button
                type="submit"
            >
                Login
            </button>

        </form>
    );
}