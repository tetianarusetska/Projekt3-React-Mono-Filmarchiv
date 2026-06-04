import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"

import App from "./App.jsx"

import ModeProvider from "./providers/ModeProvider.jsx"
import { AuthProvider } from "./providers/AuthContext.jsx"
import { PhotoModalProvider } from "./providers/PhotoModalProvider.jsx"
import { PhotosProvider } from "./providers/PhotosProvider.jsx"
import { PrintsModalProvider } from "./providers/PrintsModalProvider.jsx"

import "./index.css"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ModeProvider>
        <PrintsModalProvider>
          <PhotoModalProvider>
            <AuthProvider>
              <PhotosProvider>
                <App />
              </PhotosProvider>
            </AuthProvider>
          </PhotoModalProvider>
        </PrintsModalProvider>
      </ModeProvider>
    </BrowserRouter>
  </StrictMode>
);