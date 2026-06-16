import { useState, useEffect } from "react"
import { doc, setDoc, deleteDoc, onSnapshot } from "firebase/firestore"
import { db } from "../firebase/config.js"
import { useAuth } from "../providers/AuthContext.jsx"
import { useNavigate } from "react-router-dom"

const collections = [
    { id: "stadt-architektur", name: "Stadt & Architektur" },
    { id: "natur-landschaft", name: "Natur & Landschaft" },
    { id: "portrait", name: "Portrait" },
    { id: "licht-schatten", name: "Licht & Schatten" },
]

export function useCollection(photoId, photo) {

    const { user } = useAuth();
    const navigate = useNavigate();
    const [saved, setSaved] = useState(false);
    const [savedIn, setSavedIn] = useState(null);

    const getRef = (collectionId) =>
        doc(db, "nutzer", user.uid, "sammlungen", collectionId, "fotos", photoId || photo?.id);

    useEffect(() => {
        if (!user || !photoId) return;

        const unsubscribes = collections.map((col) =>
            onSnapshot(getRef(col.id), (snap) => {
                if (snap.exists()) {
                    setSaved(true);
                    setSavedIn(col.id);
                }
            })
        );

        return () => unsubscribes.forEach(u => u());
    }, [user, photoId]);

    async function toggleSave(onOpenMenu) {

        if (!user) {
            navigate("/anmeldung");
            return;
        }

        if (saved) {
            await deleteDoc(getRef(savedIn));
            setSaved(false);
            setSavedIn(null);
        } else {
            onOpenMenu();
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
    }

    return { saved, collections, toggleSave, saveToCollection };
}
