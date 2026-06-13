import { db } from "../firebase/config.js"
import { useState, useEffect } from "react"
import { doc, setDoc, deleteDoc, onSnapshot } from "firebase/firestore"
import { useAuth } from "../providers/AuthContext.jsx"
import { useNavigate } from "react-router-dom"
import { FaBookmark, FaRegBookmark } from "react-icons/fa"

const sammlungen = [
    { id: "stadt-architektur", name: "Stadt & Architektur" },
    { id: "natur-landschaft", name: "Natur & Landschaft" },
    { id: "portrait", name: "Portrait" },
    { id: "licht-schatten", name: "Licht & Schatten" },
]

export default function SaveButton({ photoId, photo }) {

    const { user } = useAuth();
    const navigate = useNavigate();
    const [saved, setSaved] = useState(false);
    const [savedIn, setSavedIn] = useState(null);
    const [showMenu, setShowMenu] = useState(false);

    const getRef = (collectionId) => doc(db, "nutzer", user.uid, "sammlungen", collectionId, "fotos", photoId || photo?.id);


    useEffect(() => {
        if (!user || !photoId) return;

        const unsubscribe = sammlungen.map((col) =>
            onSnapshot(getRef(col.id), (snap) => {
                if (snap.exists()) {
                    setSaved(true);
                    setSavedIn(col.id);
                }
            })
        );

        return () => unsubscribe.forEach(u => u());
    }, [user, photoId]);

    async function toggleSave() {
        if (!user) {
            navigate("/anmeldung");
            return;
        }
        if (saved) {
            await deleteDoc(getRef(savedIn));
            setSaved(false);
            setSavedIn(null);
        } else {
            setShowMenu(!showMenu);
        }
    }

    async function saveToCollection(collectionId) {
        await setDoc(getRef(collectionId), {
            photoId: photoId || photo?.id,
            savedAt: new Date(),
            urls: photo.urls,
            alt_description: photo.alt_description,
            user: photo.user,
            exif: photo.exif,
            description: photo.description,
            likes: photo.likes,
            views: photo.views,
            downloads: photo.downloads,
        });
        setSaved(true);
        setSavedIn(collectionId);
        setShowMenu(false);
    }

    return (
        <div className="relative">
            <button onClick={toggleSave}>
                {saved
                    ? <FaBookmark size={20} className="mt-2 text-(--mainColor)" />
                    : <FaRegBookmark size={20} className="mt-2 text-(--mainColor)" />
                }
            </button>

            {showMenu && (
                <>
                    <div
                        className="fixed inset-0 z-40"
                        onClick={() => setShowMenu(false)}
                    />

                    <div className="absolute bottom-8 right-0 bg-(--bgColor) border border-(--mainColor) rounded-xl p-4 flex flex-col gap-2 font-[Untitled] text-(--mainColor) w-52 z-50">
                        {sammlungen.map((col) => (
                            <button
                                key={col.id}
                                onClick={() => saveToCollection(col.id)}
                                className="text-left px-3 py-1 hover:bg-(--mainColor)/10 rounded-md transition"
                            >
                                {col.name}
                            </button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}