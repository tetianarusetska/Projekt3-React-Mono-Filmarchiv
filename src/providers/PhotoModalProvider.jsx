import { useContext, useState } from 'react'
import PhotoModalContext from '../contexts/photoModalContext.js'


export function PhotoModalProvider({ children }) {

  const [selectedPhoto, setSelectedPhoto] = useState(null)

  const openPhoto = (photo) => setSelectedPhoto(photo)
  const closePhoto = () => setSelectedPhoto(null)

  return (
    <PhotoModalContext.Provider value={{ selectedPhoto, openPhoto, closePhoto }}>
      {children}
    </PhotoModalContext.Provider>
  )
}

export function usePhoto() {
  return useContext(PhotoModalContext)
}

