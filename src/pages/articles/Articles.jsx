import { useState, useEffect } from "react"
import ArticleBlock from "./ArticleBlock"

export default function Articles() {

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchArticles() {
            try {
                const response = await fetch(
                   "https://newsapi.org/v2/everything?q=%22film+photography%22+OR+%22analog+photography%22&sortBy=popularity&language=en&apiKey=e8db247f07954719b9949b180defe3d3"
                );

                if (!response.ok) throw new Error(`HTTP error: ${response.status}`);

                const data = await response.json();

                setArticles(data.articles || []);
            } catch (error) {
                console.error("Fetch error:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchArticles();
    }, []);

    if (loading) return <p>Laden...</p>;

    return (
        <div className="mt-20 grid grid-cols-3 gap-12 mx-20">
            {articles.map((article, index) => (
                <ArticleBlock key={index} article={article} />
            ))}
        </div>
    );
}