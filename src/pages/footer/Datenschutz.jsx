

export default function Datenschutz() {
    return (
        <div className="mt-30 flex flex-col items-center gap-2 font-[Untitled] rounded-2xl border border-(--mainColor) py-10 px-10 w-175 mx-auto transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl backdrop-blur-lg">

            <h1 className="text-[24px] mb-8 bold">Datenschutzerklärung</h1>

            <div className="w-140 mb-6 text-center">
                <h2 className="text-[22px] mb-2">1.Verantwortliche Stelle</h2>
                <p>Verantwortlich für die Datenverarbeitung:</p>
                <p>Tetiana Rusetska</p>
                <p>rusetskatata@gmail.com</p>
            </div>

            <div className="w-140 mb-6">
                <h2 className="text-[22px] mb-2 text-center">2.Hosting</h2>
                <p>Diese Anwendung wird über Vercel gehostet. Beim Besuch der Website können technische Daten wie IP-Adresse, Browsertyp, Datum und Uhrzeit des Zugriffs durch den Hosting-Anbieter verarbeitet werden.</p>
                <p>Weitere Informationen: https://vercel.com/legal/privacy-policy</p>
            </div>

            <div className="w-140 mb-6">
                <h2 className="text-[22px] text-center mb-2">3.Verwendung externer APIs</h2>
                <h2 className="text-center text-[22px] mb-2">Unsplash API</h2>
                <p>Zur Anzeige von Bildern werden Inhalte der Unsplash API geladen. Dabei können technische Daten wie die IP-Adresse an die Server von Unsplash übertragen werden.</p>
                <p>Weitere Informationen: https://unsplash.com/privacy</p>
                <h2 className="text-center text-[22px] mb-2">News API</h2>
                <p>Zur Bereitstellung von Nachrichteninhalten werden Daten von einer externen News API geladen. Dabei können technische Verbindungsdaten verarbeitet werden.</p>
                <p>Es gelten die Datenschutzbestimmungen des jeweiligen API-Anbieters.</p>
            </div>

            <div className="w-140 mb-6">
                <h2 className="text-[22px] text-center mb-2">4.Cookies</h2>
                <p>Diese Anwendung verwendet keine Cookies zu Analyse- oder Werbezwecken.:</p>
            </div>

            <div className="w-140 mb-6">
                <h2 className="text-[22px] text-center mb-2">5.Rechte der betroffenen Personen</h2>
                <p className="mb-2">Nutzer haben das Recht auf:</p>
                <ul>
                    <li>– Auskunft über gespeicherte Daten</li>
                    <li>– Berichtigung unrichtiger Daten</li>
                    <li>– Löschung personenbezogener Daten</li>
                    <li>– Einschränkung der Verarbeitung</li>
                    <li>– Widerspruch gegen die Verarbeitung</li>
                </ul>
                <p className="mt-2">Bei Fragen zum Datenschutz kontaktieren Sie bitte die oben genannte verantwortliche Stelle.</p>
            </div>

        </div>
    );
}