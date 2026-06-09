import { db } from "../firebase/config.js"
import { useState, useEffect } from "react"
import { doc, setDoc, deleteDoc, onSnapshot } from "firebase/firestore"
import { useAuth } from "../providers/AuthContext.jsx"
import { useNavigate } from "react-router-dom"
import { FaHeart, FaRegHeart } from "react-icons/fa"


export default function LikeButton({ photoId, photo }) {

    const { user } = useAuth();
    const [liked, setLiked] = useState(false);
    const navigate = useNavigate();

    const getRef = () => doc(db, "nutzer", user.uid, "favoriten", photoId || photo?.id);

    useEffect(() => {

        if (!user || !photoId) return;

        const unsubscribe = onSnapshot(getRef(), (snap) => { 
            if (snap.exists() && snap.data().urls) {
                setLiked(true);
            } else {
                setLiked(false);
            }
        });

        return () => unsubscribe();
    }, [user, photoId]);

    async function toggleLike() {

        if (!user) {
            navigate("/anmeldung");
            return;
        }

        if (liked) {
            await deleteDoc(getRef());
        } else {
            await setDoc(getRef(), {
                photoId,
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
        }
    }


    return (
        <button onClick={toggleLike}>
            {liked ? (
                <FaHeart
                    size={20}
                    className="text-white"
                />
            ) : (
                <FaRegHeart
                    size={20}
                    className="text-white"
                />
            )}
        </button>
    );
}