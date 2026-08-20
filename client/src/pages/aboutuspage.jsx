import Navbar from "../components/Navbar";
import ContactBanner from "../components/ContactBanner";

function AboutUsPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">

      <Navbar />

      <section className="bg-[#061b34] px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-bold tracking-[0.3em] text-blue-400">
            OM OSS
          </p>

          <h1 className="mt-5 text-5xl font-extrabold md:text-7xl">
            PRECIS
            <br />
            <span className="text-blue-400">KALIBRERING & SERVICE</span>
          </h1>

        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl">

          <h2 className="text-4xl font-extrabold text-blue-950">
            Om företaget
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Precis Kalibrering & Service arbetar med kalibrering, service
            och underhåll av vågar och mätutrustning.
          </p>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Vi hjälper företag att säkerställa att deras utrustning
            fungerar som den ska och ger tillförlitliga mätresultat.
          </p>

        </div>
      </section>

      <ContactBanner />

    </div>
  );
}

export default AboutUsPage;