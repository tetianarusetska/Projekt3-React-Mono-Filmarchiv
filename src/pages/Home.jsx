'use client'; // Next.js-Direktive: diese Datei läuft im Browser, nicht auf dem Server

import Lenis from 'lenis'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import Hero from "./Hero.jsx"
import Intro from "./Intro.jsx"
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
            <Intro />
            <FooterIntro />
            <Footer />
            <p>Here the <Link to="/login">Login</Link></p>
        </>
    );

}