'use client'; // Next.js-Direktive: diese Datei läuft im Browser, nicht auf dem Server

import Lenis from 'lenis'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import Hero from "./Hero.jsx"

import FeaturedPhoto1 from "./FeaturedPhoto1.jsx"
import FeaturedPhoto2 from "./FeaturedPhoto2.jsx"
import TextSection from "./TextSection.jsx"

import Footer from "../../components/footer/Footer.jsx"
import FooterIntro from "../../components/footer/FooterIntro.jsx"

export default function Home() {

    useEffect(() => {
        // Lenis initialisieren: sorgt für weicheres, angenehmeres Scroll-Verhalten
        const lenis = new Lenis()
        // raf = requestAnimationFrame: wird jeden Frame aufgerufen
        // Lenis braucht das, um die Scroll-Animation flüssig zu berechnen
        function raf(time) {
            lenis.raf(time)           // Lenis mit dem aktuellen Zeitstempel aktualisieren
            requestAnimationFrame(raf) // nächsten Frame anfordern → Endlosschleife
        }
        requestAnimationFrame(raf) // Schleife starten
    }, [])


    return (
        <>
            <Hero />
            <TextSection
                label="Über das Archiv"
                quote="Fotografie. Erinnerung. Zeit. Ein kuratiertes Archiv aus Bildern, Essays und Fine-Art-Prints."
            />
            <FeaturedPhoto1 />
            <TextSection
                label="Archiv"
                quote="Mehr als nur Fotografien. Eine Sammlung von Menschen, Orten und Augenblicken, die über Jahre hinweg festgehalten wurden."
            />
            <TextSection
                label="Sammlungen"
                quote="Speichere deine Lieblingsbilder und stelle persönliche Kollektionen zusammen."
            />
            <FeaturedPhoto2 />
            <TextSection
                label="Prints"
                quote="Ausgewählte Fotografien als hochwertige Fine-Art-Prints erhältlich."
            />
            <TextSection
                label="Geschichten"
                quote="Hinter jedem Bild steckt mehr als ein Augenblick. Entdecke Essays, Interviews und fotografische Notizen."
            />
            <FooterIntro />
            <Footer />
        </>
    );
}
