import { Routes, Route } from "react-router-dom"

import Home from "./pages/homepage/Home.jsx"

import Login from "./pages/login/Login.jsx"
import Registr from "./pages/login/Registr.jsx"

import PhotosPage from "./pages/photos/PhotosPage.jsx"
import PhotographersPage from "./pages/photographers/PhotographersPage.jsx"
import PrintsPage from "./pages/prints/PrintsPage.jsx"
import ArticlesPage from "./pages/articles/ArticlesPage.jsx"

import ProfilePage from "./pages/profile/ProfilePage.jsx"
import FillProfile from "./pages/profile/FillProfile.jsx"
import FavoritesPage from "./pages/profile/FavoritesPage.jsx"
import CollectionsPage from "./pages/profile/CollectionsPage.jsx"

import Impressum from "./pages/footer/Impressum.jsx"
import Datenschutz from "./pages/footer/Datenschutz.jsx"
import Contact from "./pages/footer/Contact.jsx"

export default function Router() {

  return (
    <>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/anmeldung" element={<Login />} />
        <Route path="/registrierung" element={<Registr />} />
        
        <Route path="/fotos" element={<PhotosPage />} />
        <Route path="/fotografen" element={<PhotographersPage />} />
        <Route path="/drucke" element={<PrintsPage />} />
        <Route path="/artikel" element={<ArticlesPage />} />

        <Route path="/profil" element={<ProfilePage />} />
        <Route path="/profil/bearbeiten" element={<FillProfile />} />
        <Route path="profil/favoriten" element={<FavoritesPage />} />
        <Route path="profil/sammlungen" element={<CollectionsPage />} />

        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
        <Route path="/kontakt" element={<Contact />} />
       

      </Routes>
    </>
  )
}