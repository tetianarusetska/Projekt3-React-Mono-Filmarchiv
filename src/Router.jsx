import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home.jsx"

import Login from "./pages/login/Login.jsx"
import Registr from "./pages/login/Registr.jsx"
import Profile from "./pages/profile/Profile.jsx"

import PhotosPage from "./pages/photos/PhotosPage.jsx"
import Photographers from "./pages/photographers/Photographers.jsx"
import Prints from "./pages/prints/Prints.jsx"
import Articles from "./pages/articles/Articles.jsx"

export default function Router() {

  return (
    <>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/registr" element={<Registr />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/fotos" element={<PhotosPage />} />
        <Route path="/fotografen" element={<Photographers />} />
        <Route path="/drucke" element={<Prints />} />
        <Route path="/artikel" element={<Articles />} />

      </Routes>
    </>
  )
}