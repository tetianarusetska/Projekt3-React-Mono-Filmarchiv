export default async function handler(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");

    try {
        const topicRes = await fetch(
            "https://api.unsplash.com/topics/film/photos?per_page=30&orientation=landscape",
            { headers: { Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}` } }
        );

        if (!topicRes.ok) throw new Error(`Unsplash error: ${topicRes.status}`);
        const topicData = await topicRes.json();

        const batchSize = 5;
        const detailed = [];

        for (let i = 0; i < topicData.length; i += batchSize) {
            const batch = topicData.slice(i, i + batchSize);
            const results = await Promise.all(
                batch.map(photo =>
                    fetch(`https://api.unsplash.com/photos/${photo.id}`, {
                        headers: { Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}` },
                    }).then(r => r.json())
                )
            );
            detailed.push(...results);
        }

        res.status(200).json(detailed);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
