import { usePhotos } from "../../providers/PhotosProvider.jsx"
import PhotoBlock from "./PhotoBlock"

export default function Photos() {

    const { photos, loading } = usePhotos();

    if (loading) return <p>Laden...</p>

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