import Footer from "../../../components/footer/Footer";
import FooterIntro from "../../../components/footer/FooterIntro";
import Header from "../../../components/header/Header";
import ProfileLogOutButton from "../PofileLogOutButton";
import Cart from "./Cart";
import Checkout from "./Checkout";



export default function CartPage() {
    return (
        <>
        <Header />
        <ProfileLogOutButton />
        <Checkout />
        <Cart />
        <FooterIntro />
        <Footer />
        </>
    );
}