function Feature({ icon, title, text }) {
  return (
    <div className="flex gap-4 border-b border-slate-200 p-7 md:border-b-0 md:border-r">

      <div className="text-3xl text-blue-600">
        {icon}
      </div>

      <div>
        <h3 className="text-sm font-bold">
          {title}
        </h3>

        <p className="mt-2 text-xs leading-5 text-slate-500">
          {text}
        </p>
      </div>

    </div>
  );
}

export default Feature;