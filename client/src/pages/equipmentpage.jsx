import Navbar from "../components/Navbar";
import ContactBanner from "../components/ContactBanner";
import EquipmentCard from "../components/EquipmentCard";

function EquipmentPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">

      <Navbar />

      {/* HERO */}
      <section className="bg-[#061b34] px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-bold tracking-[0.3em] text-blue-400">
            VÅGAR & UTRUSTNING
          </p>

          <h1 className="mt-4 max-w-4xl text-5xl font-extrabold leading-tight md:text-6xl">
            UTRUSTNING FÖR
            <br />
            <span className="text-blue-400">
              NOGGRANNA RESULTAT
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Vi arbetar med olika typer av vågar och mätutrustning
            för industri, handel och andra verksamheter.
          </p>

        </div>
      </section>


      {/* EQUIPMENT */}
      <section className="bg-slate-50 px-6 py-24">

        <div className="mx-auto max-w-6xl">

          <div className="mb-12">

            <p className="text-sm font-bold tracking-[0.25em] text-blue-600">
              UTRUSTNING
            </p>

            <h2 className="mt-3 text-4xl font-extrabold text-blue-950">
              Vågar & mätutrustning
            </h2>

          </div>


          <div className="grid gap-6 md:grid-cols-2">

            <EquipmentCard
              icon="⚖"
              title="Industrivågar"
              text="Robusta vågar för industriella miljöer och verksamheter där noggranna och tillförlitliga vägningar krävs."
            />

            <EquipmentCard
              icon="⚖"
              title="Golvvågar"
              text="Vågar för tyngre material, produkter och gods. Anpassade för verksamheter där hög kapacitet behövs."
            />

            <EquipmentCard
              icon="⚖"
              title="Bänkvågar"
              text="Kompakta vågar för arbetsbord och arbetsstationer där precision och enkel användning är viktigt."
            />

            <EquipmentCard
              icon="⚙"
              title="Mätutrustning"
              text="Olika typer av mätutrustning som används för kontroll, mätning och uppföljning i verksamheten."
            />

          </div>

        </div>

      </section>


      {/* SERVICE */}
      <section className="px-6 py-24">

        <div className="mx-auto max-w-5xl text-center">

          <p className="text-sm font-bold tracking-[0.25em] text-blue-600">
            BEHÖVER DU HJÄLP?
          </p>

          <h2 className="mt-4 text-4xl font-extrabold text-blue-950">
            Vi hjälper dig med din utrustning
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-600">
            Behöver du kalibrering, service eller felsökning av din
            våg eller mätutrustning? Kontakta oss så hjälper vi dig.
          </p>

        </div>

      </section>


      <ContactBanner />

    </div>
  );
}

export default EquipmentPage;