import { useContext, useState } from "react"
import CheckoutContext from "../contexts/checkoutContext.js"

export function CheckoutProvider({ children }) {

    const [isOpen, setIsOpen] = useState(false)

    const openCheckout = () => setIsOpen(true)
    const closeCheckout = () => setIsOpen(false)

    return (
        <CheckoutContext.Provider value={{ isOpen, openCheckout, closeCheckout }}>
            {children}
        </CheckoutContext.Provider>
    )
}

export function useCheckout() {
    return useContext(CheckoutContext)
}