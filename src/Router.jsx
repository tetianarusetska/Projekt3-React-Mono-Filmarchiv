import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home.jsx"

import Auth from "./pages/Auth.jsx"

export default function Router() {

  return (
    <>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Auth />} />

      </Routes>
    </>
  )
}