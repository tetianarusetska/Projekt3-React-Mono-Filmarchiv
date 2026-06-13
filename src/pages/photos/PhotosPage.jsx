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
            />
            <Photos />
            <PhotoModal />
            <FooterIntro />
            <Footer />

        </>
    );
}
