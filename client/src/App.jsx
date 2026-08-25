import { BrowserRouter, Route, Routes } from "react-router-dom";
import FrontPage from "./pages/frontpage";
import ServicePage from "./pages/servicepage";
import AboutUsPage from "./pages/aboutuspage";
import ContactPage from "./pages/contactpage";
import EquipmentPage from "./pages/equipmentpage";
import LoginPage from "./pages/loginpage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/services" element={<ServicePage/>} />
        <Route path="/aboutus" element={<AboutUsPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/equipments" element={<EquipmentPage/>} />
        <Route path="/login" element={<LoginPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;