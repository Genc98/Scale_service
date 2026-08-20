import Button from "../components/Button";
import logo from "../pictures/logo.png";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="h-20 border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">

        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Precis Kalibrering & Service"
            className="h-12 w-12 object-contain"
           />

          <div>
            <div className="text-xl font-extrabold tracking-wide text-blue-950">PRECIS</div>
            <div className="text-[8px] font-bold tracking-widest text-blue-950">KALIBRERING & SERVICE</div>
          </div>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          <NavLink to="/" className={({ isActive }) => isActive ? "font-semibold text-blue-600" : ""}>HEM</NavLink>

          <NavLink to="/services" className={({ isActive }) => isActive ? "font-semibold text-blue-600" : ""}>TJÄNSTER</NavLink>
          <a href="#">VÅGAR & UTRUSTNING</a>
          <NavLink to="/aboutus" className={({ isActive }) => isActive ? "font-semibold text-blue-600" : ""}>OM OSS</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "font-semibold text-blue-600" : ""}>KONTAKT</NavLink>
        </nav>
        

        <Button variant="primary">
          LOGGA IN
        </Button>


      </div>
    </header>
  );
}

export default Navbar;