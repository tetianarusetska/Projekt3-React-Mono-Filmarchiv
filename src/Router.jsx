import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home.jsx"

import Login from "./pages/Login.jsx"
import Registr from "./pages/Registr.jsx"
import Profile from "./pages/Profile.jsx"

export default function Router() {

  return (
    <>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/registr" element={<Registr />} />
        <Route path="/profile" element={<Profile />} />

      </Routes>
    </>
  )
}