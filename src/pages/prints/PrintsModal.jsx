import { usePrint } from '../../providers/PrintsModalProvider.jsx'
import printsData from "../../data/printsData.json"

export default function PrintsModal() {

    const { selectedPrint, closePrint } = usePrint()

    if (!selectedPrint) return null

    const onBackgroundClick = (e) => {
        if (e.target === e.currentTarget) closePrint()
    }

    return (

        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
            onClick={onBackgroundClick}
        >
            <div
                className="relative bg-(--bgColor) shadow-2xl max-w-5xl max-h-2xl w-full mx-4 overflow-hidden flex flex-row"
            >
                <button
                    onClick={closePrint}
                    className="top-1 right-1 absolute z-10 bg-black/50 hover:bg-black/70 text-white w-10 h-10 flex items-center justify-center text-lg transition"
                >
                    X
                </button>
                <img
                    src={selectedPrint?.urls?.small}
                    alt={selectedPrint?.alt_description}
                    className="flex-1 max-h-[75vh] object-contain"
                />
                <div className='flex-1 flex flex-col gap-3 ml-8 mt-4'>
                    <p>Fotografie von {selectedPrint?.user?.name}</p>
                    <p>| {selectedPrint?.user?.location}</p>
                    <p>| "{selectedPrint?.alt_description}"</p>
                    <a href={selectedPrint?.urls?.full}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline inline-block"
                    >
                        Vollbild anzeigen
                    </a>

                    {printsData.map(print => (
                        <div key={print.name} 
                        className="flex flex-row font-[Untitled] text-[14px] opacity-80 font-light uppercase mx-auto p-3 rounded-md w-42.5 h-10 items-center justify-center text-(--mainColor) backdrop-blur-md bg-white/5 border border-white/20 shadow-lg transition-all duration-300 hover:bg-white/10 hover:scale-[1.03] active:scale-[0.98]"
                        >
                            <p>{print.name}: {print.size}</p>
                            <button
                            >
                                €{print.price}</button>
                        </div>
                    ))}

                    <button
                        className="mt-4 font-[Untitled] text-[18px] opacity-80 font-light uppercase mx-auto p-3 rounded-md w-42.5 h-10 flex items-center justify-center text-(--mainColor) backdrop-blur-md bg-white/5 border border-white/20 shadow-lg transition-all duration-300 hover:bg-white/10 hover:scale-[1.03] active:scale-[0.98]"
                    >
                        In Warenkorb
                    </button>
                </div>

            </div>
        </div>
    )
}