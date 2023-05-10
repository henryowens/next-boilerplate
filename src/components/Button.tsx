import { ButtonHTMLAttributes } from "react";

import styles from "./styles/button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  appearance?: "default" | "outlined";
}

const Button: React.FC<ButtonProps> = ({
  className,
  appearance = "default",
  ...props
}) => (
  <button
    className={`${styles.btn} ${styles[`btn-${appearance}`]} ${className}`}
    {...props}
  />
);

export default Button;
