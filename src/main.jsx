import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { FaqProvider } from "./FaqContext.jsx";
import { PromoProvider } from "./PromoContext.jsx";

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
