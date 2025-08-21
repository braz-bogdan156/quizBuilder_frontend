import React from "react";
import classes from "./Select.module.css";

type Props = React.SelectHTMLAttributes<HTMLSelectElement>;

const Select = React.forwardRef<HTMLSelectElement, Props>((props, ref) => {
  return <select ref={ref} className={classes.select} {...props} />;
});

export default Select;