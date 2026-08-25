function EquipmentCard({ icon, title, text }) {
  return (
    <div className="bg-white p-8 shadow-sm">

      <div className="flex h-20 w-20 items-center justify-center bg-slate-100 text-5xl">
        {icon}
      </div>

      <h3 className="mt-6 text-2xl font-extrabold text-blue-950">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-slate-600">
        {text}
      </p>

    </div>
  );
}

export default EquipmentCard;