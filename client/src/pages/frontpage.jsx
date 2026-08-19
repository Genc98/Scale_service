import Navbar from "../components/Navbar";
import Button from "../components/Button";
import SectionTitle from "../components/SectionTitle";
import ServiceCard from "../components/ServiceCard";
import Feature from "../components/Feature";
import ContactBanner from "../components/ContactBanner";
import front from "../pictures/front.png";
import service from "../pictures/service.png";


function FrontPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">

      <Navbar />

      <section
        className="relative min-h-[600px] bg-cover bg-center"
        style={{ backgroundImage: `url(${front})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#061b34] via-[#061b34]/90 to-[#061b34]/20" />

        <div className="relative mx-auto flex min-h-[600px] max-w-7xl items-center px-6">

          <div className="max-w-3xl text-white">

            <p className="mb-5 text-sm font-bold tracking-[0.3em] text-blue-400">KALIBRERING & SERVICE</p>

            <h1 className="text-5xl font-extrabold leading-tight md:text-7xl">NOGGRANN KALIBRERING{" "}
              <span className="text-blue-400">FÖR EXAKTA RESULTAT</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-200">Professionell kalibrering, service och underhåll av vågar och mätutrustning.</p>

            <div className="mt-8 flex gap-4">

              <Button>VÅRA TJÄNSTER</Button>

              <Button variant="outline">KONTAKTA OSS</Button>

            </div>

          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl md:grid-cols-4">

          <Feature
            icon="⚖"
            title="NOGGRANNHET"
            text="Spårbar kalibrering enligt gällande standarder."
          />

          <Feature
            icon="✓"
            title="KVALITET"
            text="Hög kompetens och lång erfarenhet."
          />

          <Feature
            icon="◷"
            title="SNABBA SVAR"
            text="Snabb återkoppling och flexibel service."
          />

          <Feature
            icon="▤"
            title="DOKUMENTATION"
            text="Kalibreringsintyg och fullständig dokumentation."
          />

        </div>
      </section>


      <section className="bg-slate-50 px-6 py-24">

        <SectionTitle small="VAD VI GÖR" title="VÅRA TJÄNSTER"/>

        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2 lg:grid-cols-4">

          <ServiceCard
            icon="⚖"
            title="KALIBRERING AV VÅGAR"
            text="Spårbar kalibrering av olika typer av vågar."
          />

          <ServiceCard
            icon="🔧"
            title="SERVICE & UNDERHÅLL"
            text="Service och underhåll för optimal funktion."
          />

          <ServiceCard
            icon="⌕"
            title="FELSÖKNING"
            text="Felsökning och reparation av utrustning."
          />

          <ServiceCard
            icon="✓"
            title="JUSTERING"
            text="Kontroll och justering för korrekta resultat."
          />

        </div>
      </section>
      
      <section className="grid md:grid-cols-2">

        <div
          className="min-h-[500px] bg-cover bg-center brightness-125"
          style={{ backgroundImage: `url(${service})` }}
        />

        <div className="flex flex-col justify-center bg-[#061e3a] px-8 py-20 text-white md:px-16">

          <p className="text-sm font-bold tracking-[0.25em] text-blue-400">OM OSS</p>

          <h2 className="mt-5 text-4xl font-extrabold leading-tight md:text-5xl">
            ERFARENHET.
            <br />
            PRECISION.
            <br />
            SERVICE.
          </h2>

          <p className="mt-6 max-w-lg leading-7 text-slate-300">
            Vi arbetar med kalibrering, service och underhåll
            av vågar och mätutrustning.
          </p>

          <div className="mt-8">
            <Button>LÄS MER OM OSS</Button>
          </div>

        </div>
      </section>


     <ContactBanner/>

    </div>
  );
}


export default FrontPage;