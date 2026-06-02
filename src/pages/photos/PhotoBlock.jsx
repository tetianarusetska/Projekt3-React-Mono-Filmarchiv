import { useState, useRef, useLayoutEffect } from "react"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { usePhoto } from "../../providers/PhotoModalProvider.jsx"


export default function PhotoBlock({ photos }) {

    // selectedPhoto speichert den Index des aktuell angezeigten Fotos (startet bei 0)
    const [selectedPhoto, setSelectedPhoto] = useState(0);

    const container = useRef(null);
    const imageContainer = useRef(null);

    const { openPhoto } = usePhoto()

    // 3 Animationen: das Bild wird gepinnt, gezoomt, ausgeblendet
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger)    // ScrollTrigger-Plugin bei GSAP

        let ctx = gsap.context(() => {        // gsap.context() gruppiert alle Animationen

            // Bild festpinnen: bleibt oben stehen, während man durch den Container scrollt
            ScrollTrigger.create({
                trigger: container.current,   // ScrollTrigger reagiert auf diesen Bereich
                pin: imageContainer.current,  // dieses Element wird fixiert (gepinnt)
                pinSpacing: false,            // kein extra Abstand durch das Pinning
                start: "top top",             // Pinning beginnt, wenn Container oben im Viewport ist
                end: "bottom bottom",         // Pinning endet, wenn Container unten den Viewport verlässt
            })

            // Zoom-Animation: Bild vergrößert sich beim Scrollen von 1x auf 1.8x
            gsap.to(imageContainer.current, {
                scale: 1.8,                   // Endzoom (1 = normal, 1.8 = 80% größer)
                ease: "none",                 // gleichmäßige Geschwindigkeit, kein Ein-/Ausblenden
                scrollTrigger: {
                    trigger: container.current,
                    start: "top top",         // Zoom beginnt, wenn Container oben ankommt
                    end: "bottom bottom",     // Zoom endet, wenn Container unten verlässt
                    scrub: true,              // Animation ist direkt an die Scrollposition gekoppelt
                }
            })

            // Ausblend-Animation — Bild verschwindet am Ende des Containers von unten nach oben
            gsap.to(imageContainer.current, {
                clipPath: "inset(0% 0% 100% 0%)", // clipPath schneidet das Bild von unten nach oben weg
                ease: "none",
                scrollTrigger: {
                    trigger: container.current,
                    start: "75% bottom",      // Ausblenden beginnt, wenn 75% des Containers durchgescrollt sind
                    end: "bottom bottom",     // endet wenn der Container vollständig aus dem Viewport gescrollt ist
                    scrub: true,              // Animation direkt an Scrollposition gekoppelt
                }
            })

        }, container)

        // Aufräumen beim Unmounten: alle Animationen und ScrollTrigger werden entfernt
        return () => ctx.revert()

    }, [photos])

    return (
        <div ref={container} className="h-[200vh] w-screen">

            <div>
                <div ref={imageContainer} className="mt-5 relative" style={{ clipPath: "inset(0% 0% 0% 0%)" }}>
                    <img
                        src={photos[selectedPhoto]?.urls?.regular}
                        alt={photos[selectedPhoto]?.alt_description}
                        onClick={() => openPhoto(photos[selectedPhoto])}
                        className="w-full h-screen object-contain cursor-pointer"
                    />

                    <div className="absolute bottom-28 left-8 w-full z-10">
                        {photos.map((photo, index) => (
                            <div
                                onMouseOver={() => setSelectedPhoto(index)}
                                onClick={() => openPhoto(photos[index])}
                                key={photo.id}
                                className="flex w-full font-bold text-[50px] text-(--mainColor) uppercase border-b border-(--mainColor) font-[Jacquard]"
                            >
                                {String(index + 1).padStart(2, "0")}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
}
