import Header from "../../components/header/Header.jsx"
import Articles from "../articles/Articles.jsx"
import FooterIntro from "../../components/footer/FooterIntro.jsx"
import Footer from "../../components/footer/Footer.jsx"
import TextSection from "../homepage/TextSection.jsx"

export default function ArticlesPage() {

    return (
        <>
            <Header />
            <TextSection
                label="Geschichten"
                quote="Geschichten, Gedanken und Notizen rund um Fotografie."
                className="min-h-[40vh] py-10 lg:min-h-[80vh] lg:py-0"
            />
            <Articles
                className="mt-10 mx-4 md:mx-8 lg:mt-30 lg:mx-20"
                gridClassName="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12"
                cardClassName="w-full max-w-md mx-auto h-auto lg:max-w-none lg:mx-0 lg:w-105 lg:h-162.5"
            />
            <FooterIntro />
            <Footer />
        </>
    );
}