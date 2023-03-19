import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ErrorPage from "./pages/ErrorPage";
import ListCampaign from "./pages/ListCampaign";
import DetailCampaign from "./pages/DetailCampaign";
import RegistrationPage from "./pages/RegistrationPage";
import DonateFormPage from "./pages/DonateFormPage";
import AddCampaignPage from "./pages/AddCampaignPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/campaign" element={<ListCampaign />} />
        <Route path="/add-campaign" element={<AddCampaignPage />} />
        <Route path="/campaign/:id" element={<DetailCampaign />} />
        <Route path="/campaign/:id/donate" element={<DonateFormPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
