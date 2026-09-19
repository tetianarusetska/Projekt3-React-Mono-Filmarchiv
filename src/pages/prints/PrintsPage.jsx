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
                className="min-h-[40vh] py-10 lg:min-h-[80vh] lg:py-0"
            />
            <Prints
                className="mt-10 mx-4 md:mx-8 lg:mt-30 lg:mx-20"
                gridClassName="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12"
                cardClassName="w-full max-w-sm mx-auto h-auto pb-2 lg:h-150 lg:w-90 lg:max-w-none lg:pb-0"
            />
            <PrintsModal />
            <PhotoModal />
            <FooterIntro />
            <Footer />
        </>
    );
}