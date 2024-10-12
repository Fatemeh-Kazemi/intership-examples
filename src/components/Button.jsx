const Button = ({ className, onClick, children, isActive }) => {
  return (
    <button
      className={
        className
          ? className
          : `py-2 px-4 ${
              isActive
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-500"
            }`
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
