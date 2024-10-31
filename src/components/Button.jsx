const Button = ({
  children,
  className = "bg-lightblue rounded-full sm:w-52 ",
}) => {
  return (
    <button
      className={`text-base py-2  transition duration-300 hover:brightness-150 px-6 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
