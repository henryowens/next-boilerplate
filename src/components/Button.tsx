import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const classes =
  "bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500";
const Button: React.FC<ButtonProps> = ({ className, ...props }) => (
  <button className={`${classes} ${className}`} {...props} />
);

export default Button;