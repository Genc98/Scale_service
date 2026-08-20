import { BrowserRouter, Route, Routes } from "react-router-dom";
import FrontPage from "./pages/frontpage";
import ServicePage from "./pages/servicepage";
import AboutUsPage from "./pages/aboutuspage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/services" element={<ServicePage/>} />
        <Route path="/aboutus" element={<AboutUsPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;