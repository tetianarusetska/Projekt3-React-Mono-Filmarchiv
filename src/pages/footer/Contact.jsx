export default function Contact() {
    return (
        <div className="mt-40 flex flex-col items-center gap-2 font-[Untitled] rounded-2xl border border-(--mainColor) py-10 px-10 w-175 mx-auto transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl backdrop-blur-lg">

            <h1 className="text-[24px] mb-8 bold">Kontakt</h1>

            <div className="w-140 mb-6 text-center">
                <h2 className="text-[22px] mb-2">Mono Fotoarchiv</h2>
                <p>Email: rusetskatata@gmail.com</p>
            </div>

            <div className="w-140 mb-6">
                <p>Bei Fragen zum Projekt, zu den verwendeten Inhalten oder zum Datenschutz können Sie uns per E-Mail kontaktieren.</p>
            </div>

            <div className="w-140 mb-6">
                
                <p>Dieses Projekt wurde zu Lern- und Demonstrationszwecken entwickelt.</p>
            </div>

        </div>
    );
}