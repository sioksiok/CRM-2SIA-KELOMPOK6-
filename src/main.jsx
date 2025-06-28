// src/main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

// Import yang benar untuk context
import { FaqProvider } from "./FaqContext.jsx";
// --- BARIS YANG HARUS DIPERBAIKI ---
// Karena PromoContext.jsx ada langsung di src/, bukan di src/context/
import { PromoProvider } from "./PromoContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PromoProvider>
      <FaqProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </FaqProvider>
    </PromoProvider>
  </StrictMode>
);