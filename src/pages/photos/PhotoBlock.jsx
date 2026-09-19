import { useState, useRef, useLayoutEffect } from "react"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { usePhoto } from "../../providers/PhotoModalProvider.jsx"


export default function PhotoBlock({ photos, className = "", imageClassName = "", listClassName = "", numberClassName = "" }) {

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

            let mm = gsap.matchMedia()
            mm.add({ isDesktop: "(min-width: 1024px)" }, (context) => {
                const { isDesktop } = context.conditions
                gsap.to(imageContainer.current, {
                    scale: isDesktop ? 1.8 : 1.2,  // Endzoom (1 = normal, 1.8 = 80% größer)
                    ease: "none",                  // gleichmäßige Geschwindigkeit, kein Ein-/Ausblenden
                    scrollTrigger: {
                        trigger: container.current,
                        start: "top top",          // Zoom beginnt, wenn Container oben ankommt
                        end: "bottom bottom",      // Zoom endet, wenn Container unten verlässt
                        scrub: true,               // Animation ist direkt an die Scrollposition gekoppelt
                    }
                })
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

    const onNumberClick = (index) => {
        if (window.matchMedia("(hover: hover)").matches) openPhoto(photos[index])
        else setSelectedPhoto(index)
    }

    return (
        <div ref={container} className={`w-full ${className}`}>

            <div>
                <div ref={imageContainer} className="mt-5 relative" style={{ clipPath: "inset(0% 0% 0% 0%)" }}>
                    <img
                        src={photos[selectedPhoto]?.urls?.regular}
                        alt={photos[selectedPhoto]?.alt_description}
                        onClick={() => openPhoto(photos[selectedPhoto])}
                        className={`w-full object-contain cursor-pointer ${imageClassName}`}
                    />

                    <div className={`absolute w-full z-10 ${listClassName}`}>
                        {photos.map((photo, index) => (
                            <div
                                onPointerEnter={(e) => e.pointerType === "mouse" && setSelectedPhoto(index)}
                                onClick={() => onNumberClick(index)}
                                key={photo.id}
                                className={`flex w-full font-bold uppercase border-b border-(--mainColor) text-(--mainColor) font-[Jacquard] ${numberClassName}`}
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
