import { usePhotos } from "../../providers/PhotosProvider.jsx"

export default function Photographers({ search }) {

    const { photos, loading } = usePhotos();

    if (loading) return (
        <div className="flex flex-col">
            <div className="flex justify-center items-center h-screen text-(--mainColor) font-[Untitled] text-[20px]">
                <p>Laden...</p>
            </div>
        </div>
    );

    const photographers = [...new Map(
        photos.map(p => [p.user.username, p.user])
    ).values()];

    const filteredPhotographers = photographers.filter(user =>
        user.name?.toLowerCase().includes(search.toLowerCase()) ||
        user.username?.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="mt-20 grid grid-cols-3 gap-20">
            {filteredPhotographers.map(user => (
                <div key={user.username} className="p-8 text-[20px] mx-10 flex flex-col justify-center gap-3 items-center font-[Fejoya] rounded-3xl border border-(--mainColor) backdrop-blur-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                    <img
                        src={user.profile_image.large}
                        alt={user.name}
                        className="rounded-full" />
                    <h3 className="mt-3 text-center">{user.name}, @{user.username}</h3>
                    <p>{user.location}</p>
                    <div className="flex flex-row gap-8 justify-center w-full border-t border-b border-(--mainColor) py-4 my-2">
                        <div className="flex flex-col items-center">
                            <p className="text-2xl font-bold">{user.total_photos}</p>
                            <p className="text-sm">Fotos</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <p className="text-2xl font-bold">{user.total_likes}</p>
                            <p className="text-sm">Likes</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <p className="text-2xl font-bold">{user.total_collections}</p>
                            <p className="text-sm">Sammlungen</p>
                        </div>
                    </div>
                    <a href={user.links.html} target="_blank" rel="noopener noreferrer" className="underline">
                        Profil ansehen
                    </a>
                    {user.instagram_username && (
                        <a href={`https://instagram.com/${user.instagram_username}`} target="_blank">
                            Instagram | @{user.instagram_username}
                        </a>
                    )}
                    <p className="w-full px-4 text-center">"{user.bio}"</p>
                </div>
            ))}
        </div>
    );
}