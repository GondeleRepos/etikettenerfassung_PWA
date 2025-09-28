import React from "react";
import "./Buttons.css";

interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: "primary" | "secondary";
}

export const Button: React.FC<ButtonProps> = ({ label, onClick, variant = "primary" }) => {
  return (
    <button className={`custom-btn ${variant}`} onClick={onClick}>
      {label}
    </button>
  );
};
