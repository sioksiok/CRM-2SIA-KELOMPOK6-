import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { FaqProvider } from './FaqContext.jsx'; // pastikan path-nya sesuai

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FaqProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FaqProvider>
  </StrictMode>
);
