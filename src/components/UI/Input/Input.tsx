import React from "react";
import classes from "./Input.module.css";

type Props = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  return <input ref={ref} className={classes.myInput} {...props} />;
});

export default Input;