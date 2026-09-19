import { useRef } from "react"
import { useScroll, useTransform, motion } from 'framer-motion'

import Header from "../../components/header/Header.jsx"

export default function Hero() {

    const container = useRef();

    const { scrollYProgress } = useScroll({        //ein Hook von Framer Motion, er gibt ScrollYProgress zurück(0 sichtbar -> 1 verschnwindet)
        target: container,
        offset: ["start end", 'end start']         //mit dem Parameter offset wird definiert wann den Messbereich begint und endet
    })

    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);  //wandelt den ScrollYProgress-Wert in einen CSS-Wert
    //das Bild bewegt sich langsamer als die Seite scrollt

    return (
        <div ref={container}
            style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
            className="relative w-full h-screen flex flex-col gap-5"
        >
            <Header />
            <div className="absolute inset-0 flex justify-center items-end pointer-events-none pb-[24vh]
                            lg:fixed lg:pb-0
                            "
            >
                <motion.div
                    style={{ y }}
                    className="flex justify-center items-end w-full h-full"
                >
                    <img
                        src="/images/img22.jpg"
                        alt="Magnum Photos"
                        className="w-auto max-w-[90vw] h-[70vh] object-contain
                                   md:h-[75vh]
                                   lg:h-[85vh]
                                  "
                    />
                </motion.div>
            </div>
        </div >
    );
}