import { useState, useRef, useLayoutEffect } from "react"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function FeaturedPhoto1() {

    const container = useRef(null);
    const imageContainer = useRef(null);

    //3 Animationen: das Bild wird gepinnt, gezoomt, ausgeblendet
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger)    //ScrollTrigger-Plugin bei GSAP 

        let ctx = gsap.context(() => {       //gsap.context() gruppiert alle Animationen

            //Bild festpinnen: bleibt oben stehen, während man durch den Container scrollt
            ScrollTrigger.create({
                trigger: container.current,      //ScrollTrigger reagiert auf diesen Bereich
                pin: imageContainer.current,     //dieses Element wird fixiert (gepinnt)
                pinSpacing: false,               //kein extra Abstand durch das Pinning
                start: "top top",               //Pinning beginnt, wenn Container oben im Viewport ist
                end: "bottom bottom",           //Pinning endet, wenn Container unten den Viewport verlässt
            })

            //Zoom-Animation: Bild vergrößert sich beim Scrollen von 1x auf 1.8x
            gsap.to(imageContainer.current, {
                scale: 1.8,                     //Endzoom (1 = normal, 1.8 = 80% größer)
                ease: "none",                   //gleichmäßige Geschwindigkeit, kein Ein-/Ausblenden
                scrollTrigger: {
                    trigger: container.current, //Animation wird durch diesen Bereich gesteuert
                    start: "top top",           //Zoom beginnt, wenn Container oben ankommt
                    end: "bottom bottom",       //Zoom endet, wenn Container unten verlässt
                    scrub: true,               //Animation ist direkt an die Scrollposition gekoppelt
                }
            })

            //Ausblend-Animation — Bild verschwindet am Ende des Containers von unten nach oben
            gsap.to(imageContainer.current, {
                clipPath: "inset(0% 0% 100% 0%)", //clipPath schneidet das Bild von unten nach oben weg
                ease: "none",
                scrollTrigger: {
                    trigger: container.current,
                    start: "75% bottom",         //Ausblenden beginnt, wenn 75% des Containers durchgescrollt sind
                    end: "bottom bottom",       //endet wenn der Container vollständig aus dem Viewport gescrollt ist
                    scrub: true,               //Animation direkt an Scrollposition gekoppelt
                }
            })

        }, container)

        // Aufräumen beim Unmounten: alle Animationen und ScrollTrigger werden entfernt
        return () => ctx.revert()
    }, [])


    return (
        <div
            ref={container}
            className="h-[300vh] w-screen"
        >
            <div
                ref={imageContainer}
                style={{ clipPath: "inset(0% 0% 0% 0%)" }}            //clipPath schneidet das Bild von unten nach oben weg
                className="w-screen h-screen flex flex-col justify-center items-center"
            >
                <img
                    src="/images/img31.jpg"
                    alt="Magnum Photos"
                    className="w-[130vh] h-[85vh] object-contain"
                />
                {/* <p className="text-[20px] font-light font-[Untitled] mt-3">Henri Cartier-Bresson, "Muslim women on the slopes of Hanri Parball Hill,<br></br> praying toward the sun rising behind the Himalayas. Kashmir, India". 1948</p> */}
            </div>

        </div>
    );
}