import { useState, useEffect } from "react"
import PhotoBlock from "./PhotoBlock"

export default function Photos() {

    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        async function fetchPhotos() {

            try {
                const response = await fetch(
                    "https://api.unsplash.com/topics/film/photos?per_page=10&orientation=landscape",
                    {
                        headers: {
                            Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`,
                        },
                    }
                );

                if (!response.ok) {
                    throw new Error(`HTTP-Fehler: ${response.status}`);
                }

                const data = await response.json();
                console.log("Ergebnis:", data);

                setPhotos(data);

            } catch (error) {
                console.error("Fehler beim Fetch:", error);
            }
        }

        fetchPhotos();
    }, []);


    const groups = [];

    for (let i = 0; i < photos.length; i += 5) {
        groups.push(photos.slice(i, i + 5));
    }


    return (
        <div>
            {groups.map((group, index) => (
                <PhotoBlock key={index} photos={group} />
            ))}
        </div>
    );
}
