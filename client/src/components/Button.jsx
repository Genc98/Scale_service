function Button({ children, variant = "primary", onClick }) {
  const baseStyles =
    "px-7 py-4 text-sm font-bold transition duration-200 rounded-sm";

  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 shadow-sm hover:shadow-md",

    outline:
      "border-2 border-white text-white hover:bg-white hover:text-blue-950",

    secondary:
      "bg-white text-blue-600 hover:bg-slate-100 shadow-sm hover:shadow-md",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]}`}
    >
      {children}
    </button>
  );
}

export default Button;