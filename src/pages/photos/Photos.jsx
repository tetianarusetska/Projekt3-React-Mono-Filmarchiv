import { useState, useRef, useLayoutEffect } from "react"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Header from "../../components/header/Header";

const photos = [
    { title: "1", src: "/images/img26.jpg" },
    { title: "2", src: "/images/img3.jpg" },
    { title: "3", src: "/images/img6.jpg" },
    { title: "4", src: "/images/img21.jpg" },
    { title: "5", src: "/images/img9.jpg" },
]

export default function Photos() {

    // selectedPhoto speichert den Index des aktuell angezeigten Fotos (startet bei 0)
    const [selectedPhoto, setSelectedPhoto] = useState(0);
    // container: Referenz auf den äußeren Wrapper (für ScrollTrigger als Auslöser)
    const container = useRef(null);
    // imageContainer: Referenz auf den Bildbereich (wird gepinnt und gezoomt)
    const imageContainer = useRef(null);

    useLayoutEffect(() => {
        // ScrollTrigger-Plugin bei GSAP registrieren
        gsap.registerPlugin(ScrollTrigger)
        // gsap.context() gruppiert alle Animationen — ermöglicht sauberes Aufräumen
        let ctx = gsap.context(() => {

            // Bild festpinnen: bleibt oben stehen, während man durch den Container scrollt
            ScrollTrigger.create({
                trigger: container.current,      // ScrollTrigger reagiert auf diesen Bereich
                pin: imageContainer.current,     // dieses Element wird fixiert (gepinnt)
                pinSpacing: false,               // kein extra Abstand durch das Pinning
                start: "top top",               // Pinning beginnt, wenn Container oben im Viewport ist
                end: "bottom bottom",           // Pinning endet, wenn Container unten den Viewport verlässt
            })

            // Zoom-Animation: Bild vergrößert sich beim Scrollen von 1x auf 1.8x
            gsap.to(imageContainer.current, {
                scale: 1.8,                     // Endzoom (1 = normal, 1.8 = 80% größer)
                ease: "none",                   // gleichmäßige Geschwindigkeit, kein Ein-/Ausblenden
                scrollTrigger: {
                    trigger: container.current, // Animation wird durch diesen Bereich gesteuert
                    start: "45% top",           // Zoom beginnt, wenn Container oben ankommt
                    end: "bottom bottom",       // Zoom endet, wenn Container unten verlässt
                    scrub: true,               // Animation ist direkt an die Scrollposition gekoppelt
                }
            })

            // Ausblend-Animation — Bild verschwindet am Ende des Containers von unten nach oben
            // (genau wie das Hero-Bild beim Hochscrollen verschwindet)
            gsap.to(imageContainer.current, {
                clipPath: "inset(0% 0% 100% 0%)", // clipPath schneidet das Bild von unten nach oben weg
                ease: "none",
                scrollTrigger: {
                    trigger: container.current,
                    start: "75% bottom", // Ausblenden beginnt, wenn 75% des Containers durchgescrollt sind
                    end: "bottom bottom", // endet wenn der Container vollständig aus dem Viewport gescrollt ist
                    scrub: true,          // Animation direkt an Scrollposition gekoppelt
                }
            })

        }, container)

        // Aufräumen beim Unmounten: alle Animationen und ScrollTrigger werden entfernt
        return () => ctx.revert()

    }, [])

    return (
        <div ref={container} className="h-[500vh] w-screen">

            <Header />

            <div>
                <div ref={imageContainer} className="mt-5 flex justify-center" style={{ clipPath: "inset(0% 0% 0% 0%)" }}>
                    <img
                        src={photos[selectedPhoto].src}  
                        alt=""
                        className="w-80% h-80% object-cover"
                    />
                </div>

                <div className="relative flex flex-col w-full">
                    {photos.map((photo, index) => {
                        return (
                            <div
                                onMouseOver={() => { setSelectedPhoto(index) }}
                                key={index}
                                className="flex w-[100%] font-bold text-[50px] text-[#ff0000] uppercase border-b border-[#ff0000] font-[Jacquard]"
                            >
                                <p>{photo.title}</p>
                            </div>
                        )
                    })}
                </div>

            </div>
        </div>
    );
}