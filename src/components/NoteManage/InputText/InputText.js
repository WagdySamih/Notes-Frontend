import React from "react";
import { useField } from "formik";
import classes from './InputText.module.scss'
export const InputText = ({ label, ...props }) => {
  const [field] = useField(props);
  return (
    <div>
      <label className={classes.label} htmlFor={field.name}>{label}</label>
      <textarea className={classes.textarea} {...field} {...props} autoComplete="off"></textarea>
    </div>
  );
};
