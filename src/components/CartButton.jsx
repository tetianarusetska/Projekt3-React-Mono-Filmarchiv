import { db } from "../firebase/config.js"
import { useState, useEffect } from "react"
import { doc, setDoc, deleteDoc, onSnapshot } from "firebase/firestore"
import { useAuth } from "../providers/AuthContext.jsx"
import { useNavigate } from "react-router-dom"

export default function CartButton({ photo, size, price }) {

    const { user } = useAuth();
    const navigate = useNavigate();
    const [inCart, setInCart] = useState(false);

    const itemId = `${photo?.id}_${size}`;
    const getRef = () => doc(db, "nutzer", user.uid, "warenkorb", itemId);

    useEffect(() => {
        if (!user || !photo?.id || !size) return;

        const unsubscribe = onSnapshot(getRef(), (snap) => {
            setInCart(snap.exists());
        });

        return () => unsubscribe();
    }, [user, photo?.id, size]);

    async function toggleCart() {
        if (!user) {
            navigate("/anmeldung");
            return;
        }
        if (!size) return;

        if (inCart) {
            await deleteDoc(getRef());
        } else {
            await setDoc(getRef(), {
                itemId,
                photoId: photo.id,
                size,
                price: Number(price),
                quantity: 1,
                addedAt: new Date(),
                urls: photo.urls,
                alt_description: photo.alt_description,
                user: photo.user,
            });
        }
    }

    return (
        <button
            onClick={toggleCart}
            className={`mt-15 font-[Untitled] text-[18px] font-light uppercase mx-auto p-3 rounded-md w-42.5 h-10 flex items-center justify-center text-(--mainColor) backdrop-blur-md border shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl active:scale-[0.98] ${inCart ? "bg-white/20 border-white/60 scale-[1.03]" : "bg-white/5 border-white/20 opacity-80"}`}
        >
            In Warenkorb
        </button>
    );
}
