export default async function handler(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");

    try {

        const topicRes = await fetch(
            "https://api.unsplash.com/topics/film/photos?per_page=30&orientation=landscape",
            { headers: { Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}` } }
        );

        if (!topicRes.ok) throw new Error(`Unsplash error: ${topicRes.status}`);
        const topicData = await topicRes.json();

        const detailed = await Promise.all(
            topicData.map(photo =>
                fetch(`https://api.unsplash.com/photos/${photo.id}`, {
                    headers: { Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}` },
                }).then(r => r.json())
            )
        );

        res.status(200).json(detailed);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}