import { BrowserRouter, Route, Routes } from "react-router-dom";
import FrontPage from "./pages/frontpage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrontPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;