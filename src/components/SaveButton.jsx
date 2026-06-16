import { useState } from "react"
import { FaBookmark, FaRegBookmark } from "react-icons/fa"
import { useCollection } from "../hooks/useCollection.js"

export default function SaveButton({ photoId, photo }) {

    const [showMenu, setShowMenu] = useState(false);
    const { saved, collections, toggleSave, saveToCollection } = useCollection(photoId, photo);

    async function handleSaveToCollection(collectionId) {
        await saveToCollection(collectionId);
        setShowMenu(false);
    }

    return (
        <div className="relative">
            <button onClick={() => toggleSave(() => setShowMenu(!showMenu))}>
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
                        {collections.map((col) => (
                            <button
                                key={col.id}
                                onClick={() => handleSaveToCollection(col.id)}
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
