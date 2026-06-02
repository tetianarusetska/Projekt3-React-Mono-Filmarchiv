import Footer from "../../components/footer/Footer.jsx";
import FooterIntro from "../../components/footer/FooterIntro.jsx";
import Header from "../../components/header/Header.jsx"
import Photographers from "./Photographers.jsx"

export default function PhotosPage() {
    return (
        <>
        <Header />

        <Photographers />

        <FooterIntro />
        <Footer />
        </>
    );
}