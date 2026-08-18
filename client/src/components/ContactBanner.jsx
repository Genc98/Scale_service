import Button from "./Button";

function ContactBanner() {
  return (
    <section className="flex flex-col justify-between gap-8 bg-blue-600 px-8 py-12 text-white md:flex-row md:items-center md:px-16">

      <div>
        <p className="text-sm font-bold tracking-[0.2em]">
          BEHÖVER DU HJÄLP?
        </p>

        <h2 className="mt-2 text-2xl font-bold md:text-3xl">
          Kontakta oss för kalibrering eller service.
        </h2>
      </div>

      <Button variant="secondary">
        KONTAKTA OSS
      </Button>

    </section>
  );
}

export default ContactBanner;