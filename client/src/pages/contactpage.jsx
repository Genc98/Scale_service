import Navbar from "../components/Navbar";
import ContactBanner from "../components/ContactBanner";

function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">

      <Navbar />

      {/* HERO */}
      <section className="bg-[#061b34] px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-bold tracking-[0.3em] text-blue-400">
            KONTAKT
          </p>

          <h1 className="mt-4 text-5xl font-extrabold md:text-6xl">
            KONTAKTA OSS
          </h1>

          <p className="mt-5 text-lg text-slate-300">
            Vi hjälper dig med kalibrering, service och felsökning.
          </p>

        </div>
      </section>


      {/* CONTACT INFO */}
      <section className="px-6 py-20">

        <div className="mx-auto max-w-5xl">

          <h2 className="text-3xl font-extrabold text-blue-950">
            Kontaktuppgifter
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">

            <div className="border border-slate-200 bg-slate-100 p-6">
              <p className="text-sm font-bold tracking-widest text-blue-600">
                TELEFON
              </p>

              <p className="mt-3 text-lg font-bold text-blue-950">
                040-000 00 00
              </p>
            </div>

            <div className="border border-slate-200 bg-slate-100 p-6">
              <p className="text-sm font-bold tracking-widest text-blue-600">
                E-POST
              </p>

              <p className="mt-3 text-lg font-bold text-blue-950">
                info@preciskalibrering.se
              </p>
            </div>

            <div className="border border-slate-200 bg-slate-100 p-6">
              <p className="text-sm font-bold tracking-widest text-blue-600">
                ADRESS
              </p>

              <p className="mt-3 text-lg font-bold text-blue-950">
                tktkfkffok 10
              </p>

              <p className="text-slate-600">
                211 20 Malmö
              </p>
            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default ContactPage;