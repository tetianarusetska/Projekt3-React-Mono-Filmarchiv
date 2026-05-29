import { useRef } from "react"
import { useScroll, useTransform, motion } from 'framer-motion'
import { useContext } from "react"

import ThemeContext from "../contexts/modeContext.js"

import Header from "../components/Header.jsx"

export default function Hero() {

    const container = useRef();

    const { scrollYProgress } = useScroll({        //ein Hook von Framer Motion, er gibt ScrollYProgress zurück(0 sichtbar -> 1 verschnwindet)
        target: container,
        offset: ["start end", 'end start']         //mit dem Parameter offset wird definiert wann den Messbereich begint und endet
    })

    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);  //wandelt den ScrollYProgress-Wert in einen CSS-Wert
                                                                       //das Bild bewegt sich langsamer als die Seite scrollt

    return (
        <div
            ref={container}
            style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}  //clipPath schneidet das Bild von unten nach oben weg
            className="w-screen h-screen flex flex-col gap-5"
        >
            <Header />
            <div
                className="fixed w-full h-full flex justify-center items-end pointer-events-none"
            >
                <motion.div                //ein spezieller div von Framer-Motion, die animierte Werte(y) direkt im Style-Prop akzeptiert
                    style={{ y }}          //und perfomant auf der GPU rendert
                >
                    <img
                        src="/images/img22.jpg"
                        alt="Magnum Photos"
                        className="w-full h-[85vh] object-contain"
                    />
                </motion.div>
            </div>

        </div>
    );
}