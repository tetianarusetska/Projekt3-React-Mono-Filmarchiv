import { Routes, Route } from "react-router-dom"

import Home from "./pages/homepage/Home.jsx"

import Login from "./pages/login/Login.jsx"
import Registr from "./pages/login/Registr.jsx"

import PhotosPage from "./pages/photos/PhotosPage.jsx"
import PhotographersPage from "./pages/photographers/PhotographersPage.jsx"
import Prints from "./pages/prints/Prints.jsx"
import Articles from "./pages/articles/Articles.jsx"

import Profile from "./pages/profile/Profile.jsx"
import Favorites from "./pages/profile/Favorites.jsx"
import Collections from "./pages/profile/Collections.jsx"

import Impressum from "./pages/footer/Impressum.jsx"
import Datenschutz from "./pages/footer/Datenschutz.jsx"
import Contact from "./pages/footer/Contact.jsx"

export default function Router() {

  return (
    <>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/registr" element={<Registr />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/fotos" element={<PhotosPage />} />
        <Route path="/fotografen" element={<PhotographersPage />} />
        <Route path="/drucke" element={<Prints />} />
        <Route path="/artikel" element={<Articles />} />

        <Route path="/profil" element={<Profile />} />
        <Route path="/favoriten" element={<Favorites />} />
        <Route path="/sammlungen" element={<Collections />} />

        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
        <Route path="/kontakt" element={<Contact />} />
       

      </Routes>
    </>
  )
}