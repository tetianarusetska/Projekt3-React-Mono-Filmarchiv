import { usePhotos } from "../../providers/PhotosProvider.jsx"
import { usePhoto } from "../../providers/PhotoModalProvider.jsx"
import { usePrint } from "../../providers/PrintsModalProvider.jsx"

export default function Prints() {

    const { photos, loading } = usePhotos();
    const { openPhoto } = usePhoto();
    const { openPrint } = usePrint();

    if (loading) return (
        <div className="flex flex-col">
            <div className="flex justify-center items-center h-screen text-(--mainColor) font-[Untitled] text-[20px]">
                <p>Laden...</p>
            </div>
        </div>
    );

    return (
        <div className="mt-30 grid grid-cols-3 gap-12 mx-20">
            {photos.map(photo => (
                <div
                    key={photo.id}
                    className="font-[Fejoya] rounded-2xl text-[18px] text-(--mainColor) w-90 h-150 backdrop-blur-lg border border-(--mainColor) cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >
                    <h1 className="px-5 py-5 text-right text-[20px]">{photo?.user?.name}</h1>
                    <img
                        src={photo?.urls?.small}
                        alt={photo?.alt_description}
                        onClick={() => openPhoto(photo)}
                        className="h-64 w-full object-contain"
                    />
                    <p className="mt-4 ml-4 mb-1">| {photo?.user?.location}</p>
                    <p className="ml-4 mb-4">| "{photo?.alt_description}</p>
                    <p className="ml-4 bold underline">€51,00 - €129,00</p>
                    <button
                     onClick={() => openPrint(photo)}
                        className="mt-15 mb-10 font-[Untitled] text-[20px] opacity-80 font-light uppercase mx-auto p-3 rounded-md w-42.5 h-10 flex items-center justify-center text-(--mainColor) backdrop-blur-md bg-(--mainColor)/5 border border-(--mainColor)/20 shadow-lg transition-all duration-300 hover:bg-(--mainColor)/10 hover:scale-[1.03] active:scale-[0.98]"
                    >
                       Bestellen
                    </button>
                </div>
            ))}
        </div>
    );
}