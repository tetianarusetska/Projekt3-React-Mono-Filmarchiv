import { FiDownload } from "react-icons/fi"

export default function DownloadButton({ photo }) {

    async function handleDownload() {
        
        const response = await fetch(photo.urls?.full);
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = `${photo.photoId}.jpg`;
        a.click();

        URL.revokeObjectURL(url);
    }

    return (
        <button onClick={handleDownload}>
            <FiDownload size={20} className="text-(--mainColor)" />
        </button>
    );
}