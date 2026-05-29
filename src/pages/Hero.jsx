import { useRef } from "react"
import { useScroll, useTransform, motion } from 'framer-motion'
import { useContext } from "react"

import ThemeContext from "../contexts/modeContext.js"

import Menu from "../components/Menu.jsx"
import ModeButton from "../components/ModeButton.jsx"
import Logo from "../components/Logo.jsx"

export default function Hero() {

    const container = useRef();

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", 'end start']
    })

    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    return (
        <div
            ref={container}
            style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
            className="w-screen h-screen flex flex-col gap-5"
        >
            <div
                className="flex flex-row gap-5"
            >
                <Logo />
                <Menu />
                <ModeButton />
            </div>
            <div
                className="fixed w-full h-full flex justify-center items-end pointer-events-none"
            >
                <motion.div
                    style={{ y }}
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