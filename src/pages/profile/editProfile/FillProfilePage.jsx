import Footer from "../../../components/footer/Footer.jsx"
import FooterIntro from "../../../components/footer/FooterIntro.jsx"
import FillProfile from "./FillProfile.jsx"
import Header from "../../../components/header/Header.jsx"

export default function ProfilePage() {
    return (
        <>
        <Header />
        <FillProfile />

        <FooterIntro />
        <Footer />
        </>
    )
}