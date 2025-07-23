import { Routes, Route, Navigate } from "react-router-dom";

import { Header } from "./components/Header.jsx";
import { SearchPage } from "./pages/SearchPage.jsx";
import { PropertyDetailsPage } from "./pages/PropertyDetailsPage.jsx";
import { RegisterPage } from "./pages/RegisterPage.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { LoginPage } from "./pages/LoginPage.jsx";
import { LogoutPage } from "./pages/LogoutPage.jsx";
import { ProfilePage } from "./pages/ProfilePage.jsx";
import { SellPage } from "./pages/SellPage.jsx";
import { NotFoundPage } from "./pages/NotFoundPage.jsx";

import { ProtectedRoute } from "./ProtectedRoute.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/explore" element={<SearchPage />} />

          <Route path="/properties/:id" element={<PropertyDetailsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/logout" element={<LogoutPage />} />
          <Route path="/register" element={<RegisterPage />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/sell" element={<SellPage />} />
          </Route>
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
