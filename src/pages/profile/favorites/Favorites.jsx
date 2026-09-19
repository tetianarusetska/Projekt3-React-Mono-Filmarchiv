import { useState, useEffect } from "react"
import { Link, Navigate } from "react-router-dom"
import { db } from "../../../firebase/config.js"
import { collection, onSnapshot } from "firebase/firestore"

import { useAuth } from "../../../providers/AuthContext.jsx"
import { usePhoto } from "../../../providers/PhotoModalProvider.jsx"

import LikeButton from "../../../components/LikeButton.jsx"

export default function Favorites() {

    const { user } = useAuth();
    const { openPhoto } = usePhoto();
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        if (!user) return;

        const ref = collection(db, "nutzer", user.uid, "favoriten");

        const unsubscribe = onSnapshot(ref, (snap) => {
            const photos = snap.docs.map(doc => doc.data());
            setFavorites(photos);
        });

        return () => unsubscribe();
    }, [user]);

    if (!user) return <Navigate to="/anmeldung" />

    if (favorites.length === 0) return (
        <div className="flex flex-col">
            <div className="mt-8 lg:mt-20 flex flex-row text-[16px] lg:text-[20px] font-[Untitled] justify-center">
                <div className="flex gap-4 lg:gap-8 border-b border-(--mainColor) px-4 lg:px-8 pb-2">
                    <Link to="/profil" className="text-(--mainColor) hover:opacity-80">Profil</Link>
                    |
                    <Link to="/profil/sammlungen" className="text-(--mainColor) hover:opacity-80">Sammlungen</Link>
                </div>
            </div>

            <h1 className="ml-4 lg:ml-20 mt-6 lg:mt-10 pb-2 text-(--mainColor) text-[18px] lg:text-[20px] font-[Untitled] border-b border-(--mainColor) w-fit">
                Favoriten
            </h1>
            <div className="flex justify-center items-center min-h-[50vh] lg:h-screen px-4 text-center text-(--mainColor) font-[Untitled] text-[18px] lg:text-[20px]">
                <p>Keine Favoriten vorhanden.</p>
            </div>
        </div>
    )


    return (
        <div className="flex flex-col">

            <div className="mt-20 flex flex-row text-[20px] font-[Untitled] justify-center">
                <div className="flex gap-8 border-b border-(--mainColor) px-8 pb-2">
                    <Link to="/profil" className="text-(--mainColor) hover:opacity-80">Profil</Link>
                    |
                    <Link to="/profil/sammlungen" className="text-(--mainColor) hover:opacity-80">Sammlungen</Link>
                </div>
            </div>

            <h1 className="ml-20 mt-10 pb-2 text-(--mainColor) text-[20px] font-[Untitled] border-b border-(--mainColor) w-fit">
                Favoriten
            </h1>

            <div className="mt-6 lg:mt-10 mx-4 lg:mx-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 rounded-2xl">
                {favorites.map((foto) => (
                    <div
                        key={foto.photoId}
                        onClick={() => openPhoto(foto)}
                        className="relative h-80 md:h-96 lg:h-120 border border-(--mainColor) flex items-center justify-center text-(--mainColor) rounded-2xl overflow-hidden cursor-pointer"
                    >
                        <img
                            src={foto.urls?.regular}
                            alt={foto.alt_description}
                            className="w-full h-full object-cover md:object-contain md:rounded-2xl"
                        />
                        <div
                            className="absolute bottom-2 right-2 lg:bottom-3 lg:right-3"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <LikeButton photoId={foto.photoId} photo={foto} />
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}



