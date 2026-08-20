function ServiceSection({
  number,
  label,
  title,
  paragraphs,
  icon,
  reverse = false,
  gray = false,
}) {
  return (
    <section className={`${gray ? "bg-slate-50" : "bg-white"} px-6 py-24`}>
      <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2 md:items-center">

        <div className={reverse ? "order-2 md:order-1" : ""}>
          <p className="text-sm font-bold tracking-[0.25em] text-blue-600">
            {number} — {label}
          </p>

          <h2 className="mt-4 text-4xl font-extrabold text-blue-950">
            {title}
          </h2>

          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="mt-6 leading-8 text-slate-600"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div
          className={`flex min-h-[350px] items-center justify-center ${
            reverse
              ? "order-1 bg-white md:order-2"
              : "bg-slate-100"
          }`}
        >
          <span className="text-8xl">{icon}</span>
        </div>

      </div>
    </section>
  );
}

export default ServiceSection;