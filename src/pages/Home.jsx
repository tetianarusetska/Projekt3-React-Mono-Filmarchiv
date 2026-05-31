'use client'; // Next.js-Direktive: diese Datei läuft im Browser, nicht auf dem Server

import Lenis from 'lenis'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import Hero from "./homepage/Hero.jsx"

import FeaturedPhoto1 from "./homepage/FeaturedPhoto1.jsx"
import IntroText from './homepage/IntroText.jsx'
import FeaturedPhoto2 from "./homepage/FeaturedPhoto2.jsx"

import Footer from "../components/footer/Footer.jsx"
import FooterIntro from "../components/footer/FooterIntro.jsx"

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
            <FeaturedPhoto1/>
            <IntroText />
            <FeaturedPhoto2/>

            <FooterIntro />
            <Footer />
        </>
    );

}