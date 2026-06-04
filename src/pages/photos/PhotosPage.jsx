import Footer from "../../components/footer/Footer.jsx";
import FooterIntro from "../../components/footer/FooterIntro.jsx";
import Header from "../../components/header/Header.jsx"
import Photos from "./Photos.jsx"
import PhotoModal from "./PhotoModal.jsx"

export default function PhotosPage() {
    return(
        <>
        <Header />

        <Photos />
        <PhotoModal />
        <FooterIntro />
        <Footer />

        </>
    );
}