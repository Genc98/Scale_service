import Navbar from "../components/Navbar";
import ContactBanner from "../components/ContactBanner";
import ServiceSection from "../components/ServiceSection";

function ServicePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">

      <Navbar />

      <section className="bg-[#061b34] px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-bold tracking-[0.3em] text-blue-400">
            VÅRA TJÄNSTER
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-extrabold leading-tight md:text-7xl">
            KALIBRERING OCH
            <br />
            <span className="text-blue-400">SERVICE</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Vi erbjuder professionell service, kalibrering och underhåll
            av vågar och mätutrustning.
          </p>

        </div>
      </section>

      <ServiceSection
        number="01"
        label="KALIBRERING"
        title="Kalibrering av vågar"
        icon="⚖"
        paragraphs={[
          "Noggranna och tillförlitliga mätningar är avgörande när vågar används i verksamheten. Vi utför kalibrering av olika typer av vågar för att säkerställa att utrustningen mäter korrekt.",
          "Vi kontrollerar utrustningen, identifierar eventuella avvikelser och dokumenterar resultatet.",
        ]}
      />

      <ServiceSection
        number="02"
        label="SERVICE"
        title="Service & underhåll"
        icon="🔧"
        gray={true}
        reverse={true}
        paragraphs={[
          "Regelbundet underhåll hjälper till att hålla utrustningen i gott skick och minska risken för driftstopp.",
          "Vi utför service och underhåll på vågar och mätutrustning och hjälper till att identifiera problem innan de leder till större fel.",
        ]}
      />

      <ServiceSection
        number="03"
        label="FELSÖKNING"
        title="Felsökning & reparation"
        icon="⌕"
        paragraphs={[
          "När en våg eller annan mätutrustning inte fungerar som den ska hjälper vi till att identifiera orsaken till problemet.",
          "Vi arbetar systematiskt med felsökning och åtgärdar problem där det är möjligt.",
        ]}
      />

      <ServiceSection
        number="04"
        label="JUSTERING"
        title="Kontroll & justering"
        icon="✓"
        gray={true}
        reverse={true}
        paragraphs={[
          "Vi kontrollerar och justerar utrustning för att säkerställa att den fungerar korrekt och ger så tillförlitliga mätresultat som möjligt.",
        ]}
      />

      <ContactBanner />

    </div>
  );
}

export default ServicePage;