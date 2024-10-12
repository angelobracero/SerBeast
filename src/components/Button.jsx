const Button = ({ children, className = "bg-lightblue" }) => {
  return (
    <button
      className={`text-base py-2 sm:w-52 rounded-full transition duration-300 hover:brightness-110 px-6 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
