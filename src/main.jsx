import { createRoot } from "react-dom/client";
import "./index.css";
import Miapp from "./App.jsx";

import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider.jsx";
import { StrictMode } from "react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Miapp />
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);
