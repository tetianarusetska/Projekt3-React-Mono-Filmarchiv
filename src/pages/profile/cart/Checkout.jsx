import { useState, useEffect } from "react"
import { db } from "../../../firebase/config.js"
import { collection, onSnapshot, doc, deleteDoc, setDoc } from "firebase/firestore"
import { useAuth } from "../../../providers/AuthContext.jsx"
import { useCheckout } from "../../../providers/CheckoutProvider.jsx"

export default function Checkout() {

    const { isOpen, closeCheckout } = useCheckout()
    const { user } = useAuth()
    const [items, setItems] = useState([])
    const [selectedPayment, setSelectedPayment] = useState(null)

    useEffect(() => {
        if (!user || !isOpen) return

        const ref = collection(db, "nutzer", user.uid, "warenkorb")
        const unsubscribe = onSnapshot(ref, (snap) => {
            setItems(snap.docs.map(d => d.data()))
        })

        return () => unsubscribe()
    }, [user, isOpen])

    if (!isOpen) return null

    const total = items.reduce((sum, item) => sum + (item.price || 0), 0).toFixed(2)

    const onBackgroundClick = (e) => {
        if (e.target === e.currentTarget) closeCheckout()
    }

    async function handleOrder() {
        if (!selectedPayment) return

        const orderId = `${user.uid}_${Date.now()}`

        await setDoc(doc(db, "nutzer", user.uid, "bestellungen", orderId), {
            orderId,
            items,
            total: Number(total),
            paymentMethod: selectedPayment,
            status: "in Bearbeitung",
            orderedAt: new Date(),
        })

        for (const item of items) {
            await deleteDoc(doc(db, "nutzer", user.uid, "warenkorb", item.itemId))
        }

        closeCheckout()
    }

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-(--bgColor)/70 backdrop-blur-sm"
            onClick={onBackgroundClick}
        >
            <div className="relative bg-(--bgColor) shadow-2xl max-w-5xl w-full mx-4 max-h-[80vh] overflow-y-auto flex flex-col p-8">

                <div className="flex items-center justify-between mb-6">
                    <h2 className="font-[Untitled] text-[20px] text-(--mainColor)">Warenkorb</h2>
                    <button
                        onClick={closeCheckout}
                        className="bg-(--bgColor)/50 hover:bg-(--bgColor)/70 text-(--mainColor) w-10 h-10 flex items-center justify-center transition"
                    >
                        X
                    </button>
                </div>

                <div className="flex flex-col gap-4">
                    {items.map(item => (
                        <div key={item.itemId} className="flex flex-row gap-4 items-center">
                            <img
                                src={item?.urls?.small}
                                alt={item?.alt_description}
                                className="w-24 h-24 object-cover rounded-md"
                            />
                            <div className="flex flex-col gap-1 font-[Untitled] text-(--mainColor) text-[16px]">
                                <p>{item?.user?.name}</p>
                                <p>"{item?.alt_description}"</p>
                                <p>{item?.size}</p>
                                <p>€{item?.price?.toFixed(2)}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="w-full h-px bg-(--mainColor)/20 my-6" />

                <p className="font-[Untitled] text-[20px] text-(--mainColor) opacity-80 mb-6">
                    Gesamt: €{total}
                </p>

                <div className="flex flex-row gap-3 mb-6">
                    {[
                        { name: "PayPal", src: "/icons/PayPal.png" },
                        { name: "Klarna", src: "/icons/Klarna.webp" },
                        { name: "Mastercard", src: "/icons/Mastercard.jpeg" },
                    ].map(option => (
                        <div
                            key={option.name}
                            onClick={() => setSelectedPayment(option.name)}
                            className={`flex-1 flex items-center justify-center h-16 rounded-md overflow-hidden backdrop-blur-lg border shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer
                                ${selectedPayment === option.name
                                    ? "bg-(--mainColor)/20 border-(--mainColor)/60 scale-[1.03]"
                                    : "bg-(--mainColor)/5 border-(--mainColor)/20 opacity-80"
                                }`}
                        >
                            <img src={option.src} alt={option.name} className="h-12 w-20 object-contain" />
                        </div>
                    ))}
                </div>

                <button
                    onClick={handleOrder}
                    className="font-[Untitled] text-[18px] opacity-80 font-light uppercase p-3 rounded-md w-42 h-10 flex items-center justify-center text-(--mainColor) backdrop-blur-md bg-(--mainColor)/5 border border-(--mainColor)/20 shadow-lg transition-all duration-300 hover:bg-(--mainColor)/10 hover:scale-[1.03] active:scale-[0.98]"
                >
                    Kaufen
                </button>
            </div>
        </div>
    )
}
