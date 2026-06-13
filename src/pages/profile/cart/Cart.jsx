import { useState, useEffect } from "react"
import { Link, Navigate } from "react-router-dom"
import { db } from "../../../firebase/config.js"
import { collection, onSnapshot, doc, deleteDoc } from "firebase/firestore"

import { useAuth } from "../../../providers/AuthContext.jsx"
import { usePhoto } from "../../../providers/PhotoModalProvider.jsx"
import { useCheckout } from "../../../providers/CheckoutProvider.jsx"

export default function Cart() {

    const { user } = useAuth();
    const { openPhoto } = usePhoto();
    const [items, setItems] = useState([]);
    const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

    const { openCheckout } = useCheckout();

    useEffect(() => {
        if (!user) return;

        const ref = collection(db, "nutzer", user.uid, "warenkorb");

        const unsubscribe = onSnapshot(ref, (snap) => {
            const photos = snap.docs.map(doc => doc.data());
            setItems(photos);
        });

        return () => unsubscribe();
    }, [user]);

    async function removeFromCart(itemId) {
        await deleteDoc(doc(db, "nutzer", user.uid, "warenkorb", itemId));
    }

    if (!user) return <Navigate to="/anmeldung" />

    if (items.length === 0) return (
        <div className="flex flex-col">
            <div className="mt-20 flex flex-row text-[20px] font-[Untitled] justify-center">
                <div className="flex gap-8 border-b border-(--mainColor) px-8 pb-2">
                    <Link to="/profil" className="text-(--mainColor) hover:opacity-80">Profil</Link>
                    |
                    <Link to="/profil/sammlungen" className="text-(--mainColor) hover:opacity-80">Sammlungen</Link>
                    |
                    <Link to="/profil/favoriten" className="text-(--mainColor) hover:opacity-80">Favoriten</Link>
                </div>
            </div>

            <h1 className="ml-20 mt-10 pb-2 text-(--mainColor) text-[20px] font-[Untitled] border-b border-(--mainColor) w-fit">
                Warenkorb
            </h1>
            <div className="flex justify-center items-center h-screen text-(--mainColor) font-[Untitled] text-[20px]">
                <p>Warenkorb ist leer.</p>
            </div>
        </div>
    )

    const total = items.reduce((sum, item) => sum + (item.price || 0), 0).toFixed(2);

    return (
        <div className="flex flex-col">

            <div className="mt-20 flex flex-row text-[20px] font-[Untitled] justify-center">
                <div className="flex gap-8 border-b border-(--mainColor) px-8 pb-2">
                    <Link to="/profil" className="text-(--mainColor) hover:opacity-80">Profil</Link>
                    |
                    <Link to="/profil/sammlungen" className="text-(--mainColor) hover:opacity-80">Sammlungen</Link>
                    |
                    <Link to="/profil/favoriten" className="text-(--mainColor) hover:opacity-80">Favoriten</Link>
                </div>
            </div>

            <h1 className="ml-20 mt-10 pb-2 text-(--mainColor) text-[20px] font-[Untitled] border-b border-(--mainColor) w-fit">
                Warenkorb
            </h1>
            <div className="mx-20 mt-8 flex flex-col items-start justify-start">
                <p className="font-[Untitled] text-[20px] text-(--mainColor) opacity-80">
                    Gesamt: €{total}
                </p>
                <div className="w-full h-px bg-(--mainColor)/20 mt-5 mb-5" />
                <button
                    onClick={() => openCheckout()}
                    className={`font-[Untitled] text-[18px] opacity-80 font-light uppercase p-3 rounded-md w-42 h-10 flex items-center justify-center text-(--mainColor) backdrop-blur-md bg-(--mainColor)/5 border border-(--mainColor)/20 shadow-lg transition-all duration-300 hover:bg-(--mainColor)/10 hover:scale-[1.03] active:scale-[0.98] ${isCheckoutOpen ? "bg-(--mainColor)/20 border-(--mainColor)/60 scale-[1.03]" : "bg-(--mainColor)/5 border-(--mainColor)/20 opacity-80"}`}
                >
                    Bestellen
                </button>
            </div>

            <div className="mt-15 grid grid-cols-3 gap-12 mx-20">
                {items.map(photo => (
                    <div
                        key={photo.itemId}
                        className="font-[Fejoya] rounded-2xl text-[18px] text-(--mainColor) w-90 h-150 backdrop-blur-lg border border-(--mainColor) cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                    >
                        <h1 className="px-5 py-5 text-right text-[20px]">{photo?.user?.name}</h1>
                        <img
                            src={photo?.urls?.small}
                            alt={photo?.alt_description}
                            onClick={() => openPhoto(photo)}
                            className="h-64 w-full object-contain"
                        />
                        <p className="mt-4 ml-4 mb-1">| {photo?.user?.location}</p>
                        <p className="ml-4 mb-4">| "{photo?.alt_description}"</p>
                        <p className="ml-4 bold underline">€{photo?.price?.toFixed(2)}</p>
                        <button
                            onClick={() => removeFromCart(photo.itemId)}
                            className="mt-15 mb-10 font-[Untitled] text-[18px] opacity-80 font-light uppercase mx-auto p-3 rounded-md w-38 h-10 flex items-center justify-center text-(--mainColor) backdrop-blur-md bg-(--mainColor)/5 border border-(--mainColor)/20 shadow-lg transition-all duration-300 hover:bg-(--mainColor)/10 hover:scale-[1.03] active:scale-[0.98]"
                        >
                            Löschen
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
