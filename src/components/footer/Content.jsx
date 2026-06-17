import { Link } from "react-router-dom"
import FooterLogo from "./FooterLogo"


export default function Content() {
    return (
        <div className='bg-(--mainColor) py-8 px-12 h-full w-full flex flex-col justify-between'>
            <Section1 />
            <Section2 />
        </div>
    )
}

const Section1 = () => {
    return (
        <div>
            <Nav />
        </div>
    )
}

const Section2 = () => {

    return (
        <div className='flex justify-between items-end text-(--bgColor) font-[SohneSchmalBuch]'>
            <h1 className='text-[18vw] leading-[0.8] mt-10'>MONO. DEIN FOTOARCHIV</h1>
            <p className='font-bold font-[Inter]'>©2026</p>
        </div>
    )
}

const Nav = () => {
    return (
        <div className='flex shrink-0 gap-20'>
            <div className='flex flex-col gap-2 font-[Fejoya] text-[26px] text-(--bgColor)'>
                <Link to="/" className='mb-1 underline uppercase text-[28px]'>HOME</Link>
                <Link to="/fotos">Fotos</Link>
                <Link to="/fotografen">Fotografen</Link>
                <Link to="/drucke">Drucke</Link>
                <Link to="/artikel">Artikel</Link>
            </div>
            <div className='flex flex-col gap-2 font-[Fejoya] text-[26px] text-(--bgColor)'>
                <Link to="/profil" className='mb-1 underline uppercase text-[28px]'>PROFIL</Link>
                <Link to="/profil">Favorite</Link>
                <Link to="/sammlungen">Sammlungen</Link>
            </div>
            <div className='flex flex-col gap-2 font-[Fejoya] text-[26px] text-(--bgColor)'>
                <h3 className='mb-1 uppercase  underline text-[28px]'>Rechtliches</h3>
                <Link to="/impressum">Impressum</Link>
                <Link to="/datenschutz">Datenschutz</Link>
                <Link to="/kontakt">Kontakt</Link>
            </div>
            <FooterLogo />
        </div>
    )
}