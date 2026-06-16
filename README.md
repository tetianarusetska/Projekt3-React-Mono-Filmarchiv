# Fotoarchiv MONO

## Tech Stack

### Frontend
React (Vite), React Router (Client-Side Routing), Tailwind CSS, Framer Motion & GSAP (Animationen), Lenis (Smooth Scroll) 

### Backend
Firebase Authentication (E-Mail/Passwort), Firestore (Echtzeit-Datenbank), Unsplash API (Fotos & Fotografen-Daten), News API (Artikel)

### Hosting
Vercel

###State Management: 5 React Context Provider
React Context API (mehrere Provider für Auth, Fotos, UI und Checkout)

## Kernfeatures

Authentifizierung – Firebase Auth mit E-Mail & Passwort

Live-Daten von externen APIs – Unsplash API (Fotos & Fotografen), News API (aktuelle Artikel)

Favoriten speichern – Foto-Daten werden in Firestore gespeichert, Live-Sync per onSnapshot

Sammlungen – Fotos werden kategorisiert in Firestore abgelegt

Print-Shop & Warenkorb-System – Print-Bestellungen als Subcollection in Firestore

Checkout-Prozess – Zahlungsmethode wählen, Bestellung wird in Firestore angelegt

Profilbearbeitung – Update in Firebase Auth & Firestore (users)

Dark/Light Mode – Theme-Umschaltung via Context Provider


## Screens








