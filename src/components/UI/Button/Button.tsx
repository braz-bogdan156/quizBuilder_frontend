import React from "react";
import classes from "./Button.module.css";

type Variant = "primary" | "success" | "danger" | "ghost";
type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant };

export default function Button({ variant = "primary", className = "", ...props }: Props) {
  return <button className={`${classes.btn} ${classes[variant]} ${className}`} {...props} />;
}