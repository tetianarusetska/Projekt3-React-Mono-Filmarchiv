import { useContext, useState, useEffect } from "react"
import PhotosContext from "../contexts/photosContext.js"

export function PhotosProvider({ children }) {

    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchPhotos() {
            try {
                const response = await fetch(
                    "/api/photos",
                    // "https://api.unsplash.com/topics/film/photos?per_page=30&orientation=landscape",
                    { headers: { Authorization: `Client-ID ${import.meta.env.UNSPLASH_ACCESS_KEY}` } }
                );
                if (!response.ok) throw new Error(`HTTP-Fehler: ${response.status}`);
                const data = await response.json();

                const detailedPhotos = await Promise.all(
                    data.map(photo =>
                        fetch(`https://api.unsplash.com/photos/${photo.id}`, {
                            headers: { Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}` },
                        }).then(r => r.json())
                    )
                );
                setPhotos(detailedPhotos);
            } catch (error) {
                console.error("Fehler beim Fetch:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchPhotos();
    }, []);

    return (
        <PhotosContext.Provider value={{ photos, loading }}>
            {children}
        </PhotosContext.Provider>
    );
}

export function usePhotos() {
    return useContext(PhotosContext);
}