export default function ArticleBlock({ article, className = "" }) {
    return (
        <article
            className={`flex flex-col rounded-2xl backdrop-blur-lg border border-(--mainColor) transition-all duration-300 lg:hover:-translate-y-2 hover:shadow-2xl ${className}`}
        >
            <img
                src={article.urlToImage}
                alt={article.title}
                className="h-48 md:h-56 lg:h-64 w-full object-cover rounded-t-2xl"
            />

            <div className="p-4 lg:p-6 flex flex-col flex-1">

                <h2 className="text-xl lg:text-2xl font-bold leading-tight break-words">
                    {article.title}
                </h2>
                <p className="text-sm opacity-90 text-right mt-2">
                    {article.author}
                </p>
                <p className="mt-4 text-base opacity-90 grow">
                    {article.description}
                </p>

                <div className="mt-6 lg:mt-auto flex flex-col gap-3">
                    <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mx-auto p-3 rounded-md w-42.5 h-10 flex items-center justify-center text-(--mainColor) backdrop-blur-md bg-(--mainColor)/5 border border-(--mainColor)/20 shadow-lg transition-all duration-300 hover:bg-(--mainColor)/10 hover:scale-[1.03] active:scale-[0.98]"
                    >
                        Lesen
                    </a>

                    <p className="text-sm opacity-90">
                        {new Date(article.publishedAt).toLocaleDateString()}
                    </p>
                </div>

            </div>
            
        </article>
    );
}