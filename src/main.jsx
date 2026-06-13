import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"

import App from "./App.jsx"
import ScrollToTop from "./components/ScrollToTop.jsx"

import ModeProvider from "./providers/ModeProvider.jsx"
import { AuthProvider } from "./providers/AuthContext.jsx"
import { PhotoModalProvider } from "./providers/PhotoModalProvider.jsx"
import { PhotosProvider } from "./providers/PhotosProvider.jsx"
import { PrintsModalProvider } from "./providers/PrintsModalProvider.jsx"
import { CheckoutProvider } from "./providers/CheckoutProvider.jsx"

import "./index.css"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <ModeProvider>
        <PrintsModalProvider>
          <CheckoutProvider>
            <PhotoModalProvider>
              <AuthProvider>
                <PhotosProvider>
                  <App />
                </PhotosProvider>
              </AuthProvider>
            </PhotoModalProvider>
          </CheckoutProvider>
        </PrintsModalProvider>
      </ModeProvider>
    </BrowserRouter>
  </StrictMode>
);