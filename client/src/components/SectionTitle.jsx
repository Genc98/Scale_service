function SectionTitle({ small, title }) {
  return (
    <div className="mb-12 text-center">

      <p className="text-xs font-bold tracking-[0.25em] text-blue-600">
        {small}
      </p>

      <h2 className="mt-3 text-4xl font-extrabold text-slate-900">
        {title}
      </h2>

      <div className="mx-auto mt-5 h-1 w-12 bg-blue-600" />

    </div>
  );
}

export default SectionTitle;