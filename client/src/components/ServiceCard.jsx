function ServiceCard({ icon, title, text }) {
  return (
    <div className="group border border-slate-200 bg-white p-8 text-center transition duration-300 hover:-translate-y-2 hover:shadow-xl">

      <div className="mb-5 text-4xl text-blue-600">
        {icon}
      </div>

      <h3 className="text-sm font-bold">
        {title}
      </h3>

      <p className="mt-4 text-sm leading-6 text-slate-500">
        {text}
      </p>

    </div>
  );
}

export default ServiceCard;