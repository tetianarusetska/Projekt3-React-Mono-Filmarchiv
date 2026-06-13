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
            />
            <Articles />
            <FooterIntro />
            <Footer />
        </>
    );
}