import { FaHeart, FaRegHeart } from "react-icons/fa"
import { useFavorite } from "../hooks/useFavorite.js"


export default function LikeButton({ photoId, photo }) {

    const { liked, toggleFavorite } = useFavorite(photoId, photo);

    return (
        <button onClick={toggleFavorite}>
            {liked ? (
                <FaHeart
                    size={20}
                    className="text-(--mainColor)"
                />
            ) : (
                <FaRegHeart
                    size={20}
                    className="text-(--mainColor)"
                />
            )}
        </button>
    );
}
