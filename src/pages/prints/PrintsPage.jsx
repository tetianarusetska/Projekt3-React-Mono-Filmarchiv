import Prints from "./Prints.jsx"
import Header from "../../components/header/Header.jsx"
import Footer from "../../components/footer/Footer.jsx"
import FooterIntro from "../../components/footer/FooterIntro.jsx"
import PrintsModal from "./PrintsModal.jsx"
import PhotoModal from "../photos/PhotoModal.jsx"
import TextSection from "../homepage/TextSection.jsx"

export default function PrintsPage() {
    return (
        <>
            <Header />
            <TextSection
                label="Fine-Art-Prints"
                quote="Ausgewählte Aufnahmen als Fine - Art - Prints — für die Wand, für immer."
            />
            <Prints />
            <PrintsModal />
            <PhotoModal />
            <FooterIntro />
            <Footer />
        </>
    );
}