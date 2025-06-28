import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

// Import yang benar untuk context
import { FaqProvider } from "./FaqContext.jsx";
import { PromoProvider } from "./context/PromoContext"; // ✅ sudah diperbaiki

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
