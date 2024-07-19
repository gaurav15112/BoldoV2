"use client";

import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  varient?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  backgroundColor?: string;
  color?: string;
  font?: string;
  style?: { padding: string };
  padding?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  disabled = false,
  color,
  backgroundColor,
  padding,
  font,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${styles.button}`}
      style={{ backgroundColor: backgroundColor, padding: padding }}
    >
      <span>
        <p style={{ color: color }}>{children}</p>
      </span>
    </button>
  );
};

export default Button;
