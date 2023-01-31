import { ButtonHTMLAttributes, MouseEvent, ReactNode } from "react";
// styles
import "./Button.css";

interface IButton {
  children: ReactNode;
  isDark?: boolean;
  outlined?: boolean;
  icon?: string;
  className?: string;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  onClick?: () => void;
}

export default function Button({
  children,
  className = "",
  isDark = false,
  outlined = false,
  type = "button",
  onClick,
}: IButton) {
  const bgCss = isDark ? "bg-dark" : "bg-white";
  const colorCss = isDark ? "text-light" : "text-dark";
  const outlinedCss = outlined ? "outlined" : "";

  const classNames = `${className} ${bgCss} ${colorCss} ${outlinedCss}`;

  return (
    <button type={type} onClick={onClick} className={classNames}>
      {children}
    </button>
  );
}
