import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"

import App from "./App.jsx"
import ModeProvider from "./providers/ModeProvider.jsx"
import { AuthProvider } from "./providers/AuthContext.jsx"
import { PhotoModalProvider } from "./providers/PhotoModalProvider.jsx"

import "./index.css"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ModeProvider>
        <PhotoModalProvider>
          <AuthProvider>
            <App />
          </AuthProvider>
        </PhotoModalProvider>
      </ModeProvider>
    </BrowserRouter>
  </StrictMode>
);