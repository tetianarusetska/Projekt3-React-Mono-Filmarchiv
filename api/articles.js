export default async function handler(req, res) {

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if (req.method === "OPTIONS") {
        return res.status(200).end();
    }

    const apiKey = process.env.VITE_NEWS_API_KEY;

    if (!apiKey) {
        return res.status(500).json({ error: "API key not configured" });
    }

    try {
        const response = await fetch(
            `https://newsapi.org/v2/everything?q=%22film+photography%22+OR+%22analog+photography%22&sortBy=popularity&language=en&apiKey=${apiKey}`
        );

        if (!response.ok) {
            throw new Error(`NewsAPI error: ${response.status}`);
        }

        const data = await response.json();
        return res.status(200).json(data);
    } catch (error) {
        console.error("NewsAPI fetch error:", error);
        return res.status(500).json({ error: error.message });
    }
}
