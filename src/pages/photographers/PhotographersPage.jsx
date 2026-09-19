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
                className="min-h-[40vh] py-10 mt-5 lg:mt-0 lg:min-h-[80vh] lg:py-0"
            />
            <Search onSearch={setSearch} />
            <Photographers
                search={search}
                className="px-4 md:px-8 mt-10 lg:mt-20 lg:px-0"
                gridClassName="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-20"
                cardClassName="mx-0 p-5 lg:mx-10 lg:p-8"
            />

            <FooterIntro />
            <Footer />
        </>
    );
}