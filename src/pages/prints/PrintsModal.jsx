import { useState } from "react"
import { usePrint } from '../../providers/PrintsModalProvider.jsx'
import printsData from "../../data/printsData.json"
import CartButton from "../../components/CartButton.jsx"

export default function PrintsModal() {

    const { selectedPrint, closePrint } = usePrint()
    const [selectedSize, setSelectedSize] = useState(null);

    if (!selectedPrint) return null

    const onBackgroundClick = (e) => {
        if (e.target === e.currentTarget) closePrint()
    }

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
            onClick={onBackgroundClick}
        >
            <div className="relative bg-(--bgColor) shadow-2xl max-w-5xl h-[70vh] w-full mx-4 overflow-hidden flex flex-row">
                <button
                    onClick={closePrint}
                    className="top-1 right-1 absolute z-10 bg-black/50 hover:bg-black/70 text-white w-10 h-10 flex items-center justify-center text-lg transition"
                >
                    X
                </button>

                <img
                    src={selectedPrint?.urls?.small}
                    alt={selectedPrint?.alt_description}
                    className="flex-1 w-1/2 object-contain"
                />

                <div className="flex-1 flex flex-col text-[18px] justify-center gap-3 ml-8 mt-4">
                    <p>Fotografie von {selectedPrint?.user?.name}</p>
                    <p>| {selectedPrint?.user?.location}</p>
                    <p>| "{selectedPrint?.alt_description}"</p>
                    <a
                        href={selectedPrint?.urls?.full}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline inline-block"
                    >
                        Vollbild anzeigen
                    </a>

                    <div className="w-full h-px bg-(--mainColor)/20 mt-0 mb-3" />

                    <div>
                        <p className="uppercase tracking-wider text-sm mb-4">
                            Verfügbare Größen
                        </p>

                        <div className="grid grid-cols-2 gap-3">
                            {printsData.map(print => {
                                const isSelected = selectedSize?.name === print.name;
                                return (
                                    <div
                                        key={print.name}
                                        onClick={() => setSelectedSize(print)}
                                        className={`
                                            text-(--mainColor) flex items-center justify-center h-12 rounded-md
                                            backdrop-blur-lg border shadow-lg
                                            transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl cursor-pointer
                                            ${isSelected
                                                ? "bg-white/20 border-white/60 scale-[1.03]"
                                                : "bg-white/5 border-white/20 opacity-80"
                                            }
                                        `}
                                    >
                                        <span className="text-[15px]">
                                            {print.name}: {print.size}, €{print.price}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {!selectedSize && (
                        <p className="text-[13px] opacity-50 uppercase tracking-wider -mb-2">
                            Bitte wählen Sie eine Größe
                        </p>
                    )}

                    <CartButton
                        photo={selectedPrint}
                        size={selectedSize?.size}
                        price={selectedSize?.price}
                        disabled={!selectedSize}
                    />
                </div>
            </div>
        </div>
    )
}
