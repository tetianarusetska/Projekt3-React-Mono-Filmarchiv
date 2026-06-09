import Footer from "../../components/footer/Footer";
import FooterIntro from "../../components/footer/FooterIntro";
import Header from "../../components/header/Header";
import PhotoModal from "../photos/PhotoModal";
import Favorites from "./Favorites";
import ProfileLogOutButton from "./PofileLogOutButton";


export default function FavoritesPage() {
    return (
        <>
            <Header />
            <ProfileLogOutButton />
            <Favorites />
            <PhotoModal />
            <FooterIntro />
            <Footer />
        </>
    );
}
