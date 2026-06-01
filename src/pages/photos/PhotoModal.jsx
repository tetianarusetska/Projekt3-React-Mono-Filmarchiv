import { usePhoto } from '../../providers/PhotoModalProvider.jsx'

export default function PhotoModal() {

    const { selectedPhoto, closePhoto } = usePhoto()

    if (!selectedPhoto) return null

    const onBackgroundClick = (e) => {
        if (e.target === e.currentTarget) closePhoto()
    }

    return (

        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
            onClick={onBackgroundClick}
        >
            <div
                className="relative bg-(--bgColor) shadow-2xl max-w-5xl w-full mx-4 overflow-hidden max-h-[110vh] flex flex-col"
            >
                <button
                    onClick={closePhoto}
                    className="absolute top-5 right-5 z-10 bg-black/50 hover:bg-black/70 text-white w-10 h-10 flex items-center justify-center text-lg transition"
                >
                    X
                </button>

                <div className="relative flex justify-center items-center p-5 mt-5 max-h-[75vh]">
                    <div className="relative inline-block">
                        <img
                            src={selectedPhoto?.urls?.regular}
                            alt={selectedPhoto?.alt_description}
                            className="max-h-[75vh] object-contain"
                        />
                    </div>
                </div>

                <div className="ml-5 py-6 font-[Untitled] text-(--mainColor) text-md">
                    <p className="">
                        Fotografie von {selectedPhoto?.user?.name}, {selectedPhoto?.user?.location}. | "{selectedPhoto?.alt_description}"
                    </p>
                    <p className="mt-1">
                        {selectedPhoto?.description}
                    </p>
                    <div className='flex flex-row gap-25'>
                        <div className='flex flex-row gap-7'>
                            <p>{selectedPhoto?.likes} Likes</p>
                            <p>{selectedPhoto?.views} Aufrufe</p>
                            <p>{selectedPhoto?.downloads} Downloads</p>
                        </div>
                        <div className='flex flex-row gap-7'>
                            <p>{selectedPhoto?.exif?.make}</p>
                            <p>{selectedPhoto?.exif?.model}</p>
                            <p>{selectedPhoto?.exif?.iso}</p>
                            <p>{selectedPhoto?.exif?.focal_length}</p>
                            <p>{selectedPhoto?.exif?.exposure_time}</p>
                        </div>

                    </div>

                    <a href={selectedPhoto?.user?.links?.html}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-1 mr-3"
                    >
                        Unsplash-Profil ansehen
                    </a>
                    |
                    <a href={selectedPhoto?.urls?.full}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-1 ml-3"
                    >
                        Vollbild anzeigen
                    </a>
                </div>
            </div>
        </div>
    )
}