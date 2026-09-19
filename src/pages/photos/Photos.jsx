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
        <div className="mt-20 lg:mt-60">
            {groups.map((group, index) => (
                <PhotoBlock
                    key={index}
                    photos={group}
                    className="h-[150vh] lg:h-[200vh]"
                    imageClassName="h-[70vh] lg:h-screen"
                    listClassName="bottom-6 left-4 lg:bottom-28 lg:left-8"
                    numberClassName="text-[28px] lg:text-[50px]"
                />
            ))}
        </div>
    );
}