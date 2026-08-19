import { BrowserRouter, Route, Routes } from "react-router-dom";
import FrontPage from "./pages/frontpage";
import ServicePage from "./pages/servicepage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/services" element={<ServicePage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;