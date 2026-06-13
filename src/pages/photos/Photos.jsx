import { usePhotos } from "../../providers/PhotosProvider.jsx"
import PhotoBlock from "./PhotoBlock"

export default function Photos() {

    const { photos, loading } = usePhotos();

    if (loading) return (
        <div className="flex flex-col">
            <div className="flex justify-center items-center h-screen text-(--mainColor) font-[Untitled] text-[20px]">
                <p>Laden...</p>
            </div>
        </div>
    );

    const groups = [];
    for (let i = 0; i < photos.length; i += 5) {
        groups.push(photos.slice(i, i + 5));
    }

    return (
        <div className="mt-60">
            {groups.map((group, index) => (
                <PhotoBlock key={index} photos={group} />
            ))}
        </div>
    );
}