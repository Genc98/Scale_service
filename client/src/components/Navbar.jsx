import Button from "../components/Button";

function Navbar() {
  return (
    <header className="h-20 border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">

        <div className="flex items-center gap-3">
          <img
            src=""
            alt="Precis Kalibrering & Service"
            className="h-12 w-12 object-contain"
           />

          <div>
            <div className="text-xl font-extrabold tracking-wide text-blue-950">PRECIS</div>
            <div className="text-[8px] font-bold tracking-widest text-blue-950">KALIBRERING & SERVICE</div>
          </div>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          <a className="font-semibold text-blue-600" href="#">HEM</a>

          <a href="#">TJÄNSTER</a>
          <a href="#">VÅGAR & UTRUSTNING</a>
          <a href="#">OM OSS</a>
          <a href="#">KONTAKT</a>
        </nav>

        <Button variant="primary">
          KONTAKTA OSS 
        </Button>

      </div>
    </header>
  );
}

export default Navbar;