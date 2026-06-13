import { useState } from "react"

import Footer from "../../components/footer/Footer.jsx"
import FooterIntro from "../../components/footer/FooterIntro.jsx"
import Header from "../../components/header/Header.jsx"
import Search from "../../components/Search.jsx"
import Photographers from "./Photographers.jsx"
import TextSection from "../homepage/TextSection.jsx"

export default function PhotosPage() {

    const [search, setSearch] = useState("");

    return (
        <>
            <Header />

            <TextSection
                label="Fotografen"
                quote="Fotografen dokumentieren nicht nur die Welt – sie zeigen uns, wie sie sie sehen."
            />
            <Search onSearch={setSearch} />
            <Photographers search={search} />

            <FooterIntro />
            <Footer />
        </>
    );
}