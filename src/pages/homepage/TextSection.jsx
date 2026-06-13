import { useRef, useLayoutEffect } from "react"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function TextSection({ label, quote, author, className = "" }) {

    const container = useRef(null);
    const text = useRef(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        let ctx = gsap.context(() => {

            gsap.fromTo(
                text.current,
                { y: 60, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    ease: "none",
                    scrollTrigger: {
                        trigger: container.current,
                        start: "top 80%",
                        end: "top 30%",
                        scrub: true,
                    }
                }
            )

        }, container)

        return () => ctx.revert()
    }, [])

    return (
        <div
            ref={container}
            className="w-screen min-h-[80vh] flex flex-col justify-center items-center px-8 md:px-24 text-center"
        >
            <div ref={text} className="max-w-4xl">
                {label && (
                    <p className="mb-4 text-[12px] md:text-[14px] font-light font-[Untitled] tracking-[0.2em] uppercase opacity-60">
                        {label}
                    </p>
                )}
                <p className={`text-[28px] md:text-[40px] font-light leading-snug ${className || "font-[Untitled]"}`}>
                    {quote}
                </p>
                {author && (
                    <p className="mt-6 text-[14px] md:text-[18px] font-light font-[Untitled] opacity-80">
                        {author}
                    </p>
                )}
            </div>
        </div>
    );
}
