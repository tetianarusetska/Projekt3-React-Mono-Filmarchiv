import Footer from "../../../components/footer/Footer";
import FooterIntro from "../../../components/footer/FooterIntro";
import Header from "../../../components/header/Header";
import LogOutButton from "../../../components/login/LogOutButton";
import PhotoModal from "../../photos/PhotoModal";
import Collections from "./Collections";
import Favorites from "../favorites/Favorites";
import ProfileLogOutButton from "../PofileLogOutButton";


export default function CollectionsPage() {
    return (
        <>
            <Header />
            <ProfileLogOutButton />
            <Collections />
            <PhotoModal />
            <FooterIntro />
            <Footer />
        </>
    );
}
