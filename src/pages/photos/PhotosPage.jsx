import Footer from "../../components/footer/Footer.jsx";
import FooterIntro from "../../components/footer/FooterIntro.jsx";
import Header from "../../components/header/Header.jsx"
import Photos from "./Photos.jsx"
import PhotoModal from "./PhotoModal.jsx"
import TextSection from "../homepage/TextSection.jsx"

export default function PhotosPage() {
    return (
        <>
            <Header />
            <TextSection
                label="Fotos"
                quote="Entdecke außergewöhnliche Fotografien und erfahre mehr über die Menschen, Orte und Geschichten hinter jedem Bild."
                className="min-h-[40vh] py-10 mt-20 lg:mt-0 lg:min-h-[80vh] lg:py-0"
            />
            <Photos />
            <PhotoModal />
            <FooterIntro />
            <Footer />

        </>
    );
}
