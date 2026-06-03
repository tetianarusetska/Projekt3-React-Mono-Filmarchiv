import Footer from "../../components/footer/Footer";
import FooterIntro from "../../components/footer/FooterIntro";
import Header from "../../components/header/Header";
import LogOutButton from "../../components/login/LogOutButton";
import Collections from "./Collections";
import Favorites from "./Favorites";
import ProfileLogOutButton from "./PofileLogOutButton";


export default function FavoritesPage() {
    return (
        <>
            <Header />
            <ProfileLogOutButton />
            <Collections />
            <FooterIntro />
            <Footer />
        </>
    );
}
