export default function Impressum() {
    return (
        <div className="mt-30 flex flex-col items-center gap-2 font-[Untitled] rounded-2xl border border-(--mainColor) py-10 px-10 w-175 mx-auto transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl backdrop-blur-lg">

            <h1 className="text-[24px] mb-8 bold">Impressum</h1>

            <div className="w-140 mb-6 text-center">
                <h2 className="text-[22px] mb-2">Angaben gemäß § 5 TMG</h2>
                <p>Mono Fotoarchiv</p>
            </div>

            <div className="w-140 mb-6 text-center">
                <h2 className="text-[22px] mb-2">Verantwortlich für den Inhalt</h2>
                <p>Tetiana Rusetska</p>
                <p>rusetskatata@gmail.com</p>
            </div>

            <div className="w-140 mb-6">
                <h2 className="text-[22px] text-center mb-2">Projektbeschreibung</h2>
                <p>Mono Fotoarchiv ist ein Portfolio- und Lernprojekt, das im Rahmen einer Weiterbildung im Bereich Web Development entwickelt wurde.</p>
            </div>

            <div className="w-140 mb-6">
                <h2 className="text-[22px] text-center mb-2">Verwendete Dienste</h2>
                <p>Diese Anwendung nutzt externe Dienste und APIs, darunter:</p>
                <p>Unsplash API zur Bereitstellung von Bildmaterial</p>
                <p>News API zur Bereitstellung aktueller Nachrichteninhalte</p>
                <p>Vercel als Hosting-Plattform</p>
            </div>

            <div className="w-140 mb-6">
                <h2 className="text-[22px] text-center mb-2">Haftungsausschluss</h2>
                <p>Die Inhalte dieser Anwendung werden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der bereitgestellten Informationen wird jedoch keine Gewähr übernommen.</p>
            </div>

            <div className="w-140 mb-6">
                <h2 className="text-[22px] text-center mb-2">Urheberrecht</h2>
                <p>Alle Rechte an den verwendeten Bildern und Inhalten liegen bei den jeweiligen Rechteinhabern. Bilder von Unsplash unterliegen den Nutzungsbedingungen von Unsplash.</p>
            </div>

        </div>
    );
}