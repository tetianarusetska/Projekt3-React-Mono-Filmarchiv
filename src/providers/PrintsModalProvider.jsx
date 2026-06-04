import { useContext, useState } from "react"
import PrintsModalContext from "../contexts/printsModalContext.js"

export function PrintsModalProvider({ children }) {

  const [selectedPrint, setSelectedPrint] = useState(null)

  const openPrint = (photo) => setSelectedPrint(photo)
  const closePrint = () => setSelectedPrint(null)

  return (
    <PrintsModalContext.Provider value={{ selectedPrint, openPrint, closePrint }}>
      {children}
    </PrintsModalContext.Provider>
  )
}

export function usePrint() {
  return useContext(PrintsModalContext)
}