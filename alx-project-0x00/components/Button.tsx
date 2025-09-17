import { ButtonProps } from "@/interfaces";

const sizeClasses = {
  small: 'text-sm px-3 py-1',
  medium: 'text-base px-4 py-2',
  large: 'text-lg px-6 py-3',
};

const roundedClasses = {
  sm: 'rounded-sm',
  md: 'rounded-md',
  full: 'rounded-full',
};

const Button: React.FC<ButtonProps> = ({
  title,
  size = 'medium',
  rounded = 'md',
  onClick,
}) => {
  return (
    <button
      className={`font-semibold text-white bg-blue-600 hover:bg-blue-700 transition
                  ${sizeClasses[size]} ${roundedClasses[rounded]}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;