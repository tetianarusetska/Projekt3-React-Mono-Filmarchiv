import Prints from "./Prints.jsx"
import Header from "../../components/header/Header.jsx"
import Footer from "../../components/footer/Footer.jsx"
import FooterIntro from "../../components/footer/FooterIntro.jsx"
import PrintsModal from "./PrintsModal.jsx"
import PhotoModal from "../photos/PhotoModal.jsx"

export default function PrintsPage() {
    return (
        <>
            <Header />
            <Prints />
            <PrintsModal />
            <PhotoModal />
            <FooterIntro />
            <Footer />
        </>
    );
}