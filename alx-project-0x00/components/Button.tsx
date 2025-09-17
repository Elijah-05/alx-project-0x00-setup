import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, onClick }) => {
  return (
    <button
      className={`font-semibold text-white bg-blue-600 hover:bg-blue-700 transition
                  `}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
