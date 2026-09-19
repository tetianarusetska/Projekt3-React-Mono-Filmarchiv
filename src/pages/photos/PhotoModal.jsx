import { usePhoto } from '../../providers/PhotoModalProvider.jsx'
import LikeButton from "../../components/LikeButton.jsx"
import SaveButton from '../../components/SaveButton.jsx'
import DownloadButton from '../../components/DownloadButton.jsx'


export default function PhotoModal() {

    const { selectedPhoto, closePhoto } = usePhoto()

    if (!selectedPhoto) return null

    const onBackgroundClick = (e) => {
        if (e.target === e.currentTarget) closePhoto()
    }

    return (

        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-(--bgColor)/70 backdrop-blur-sm"
            onClick={onBackgroundClick}
        >
            <div className="relative bg-(--bgColor) shadow-2xl max-w-5xl w-full mx-2 lg:mx-4 overflow-y-auto max-h-[92dvh] flex flex-col">
                <button
                    onClick={closePhoto}
                    className="absolute top-3 right-3 lg:top-5 lg:right-5 z-10 bg-(--bgColor)/50 hover:bg-(--bgColor)/70 text-(--mainColor) w-10 h-10 flex items-center justify-center text-lg transition"
                >
                    X
                </button>

               <div className="relative flex justify-center items-center p-3 lg:p-5 mt-5">
                    <div className="relative inline-block">
                        <img
                            src={selectedPhoto?.urls?.regular}
                            alt={selectedPhoto?.alt_description}
                            className="max-h-[45vh] lg:max-h-[75vh] max-w-full object-contain"
                        />
                    </div>
                </div>

                <div className="mx-3 lg:mx-0 lg:ml-5 py-4 lg:py-6 font-[Untitled] text-(--mainColor) text-sm lg:text-base">
                    <p className="mt-1">
                        Fotografie von {selectedPhoto?.user?.name} | {selectedPhoto?.user?.location} | "{selectedPhoto?.alt_description}"
                    </p>
                    <p className="mt-1">
                        {selectedPhoto?.description}
                    </p>
                    <div className='mt-1 flex flex-row flex-wrap gap-x-4 gap-y-1 lg:gap-7'>
                        <p>{selectedPhoto?.exif?.make}</p>
                        <p>{selectedPhoto?.exif?.model}</p>
                        <p>{selectedPhoto?.exif?.iso}</p>
                        <p>{selectedPhoto?.exif?.focal_length}</p>
                        <p>{selectedPhoto?.exif?.exposure_time}</p>
                    </div>
                   <div className='flex flex-col gap-3 lg:flex-row lg:justify-between'>
                        <div className='mt-1 flex flex-row flex-wrap gap-x-4 gap-y-1 lg:gap-7'>
                            <p>{selectedPhoto?.likes} Likes</p>
                            <p>{selectedPhoto?.views} Aufrufe</p>
                            <p>{selectedPhoto?.downloads} Downloads</p>
                        </div>
                        <div className='flex flex-row gap-3 lg:mr-20'>
                            <DownloadButton photo={selectedPhoto} />
                            <LikeButton photoId={selectedPhoto?.id || selectedPhoto?.photoId} photo={selectedPhoto}  />
                            <SaveButton photoId={selectedPhoto?.id || selectedPhoto?.photoId} photo={selectedPhoto} />
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