const Button = ({ children, variant = "primary" }) => {
  return (
    <button
    className={`h-[30px] w-full rounded-[4px] ${variant === "primary" ? "bg-gray-800" : "bg-gray-400"} px-3 text-sm text-white`}  
    >
      {children}
    </button>
  );
};

export default Button;
