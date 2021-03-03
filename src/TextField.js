import React from "react";
import { useField, ErrorMessage } from "formik";

const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      {props.type === "select" ? (
        <div className="mb-2">
          <label htmlFor={field.name}>{label}</label>
          <select className={`form-control shadow-none ${meta.touched && meta.error && "is-invalid"}`} {...field} {...props}>
            <option disabled value="">
              Open this select menu
            </option>
            <option value="1">Cooking</option>
            <option value="2">Coding</option>
            <option value="3">Eating</option>
          </select>
          <ErrorMessage component="div" name={field.name} className="error" />
        </div>
      ) : (
        <div className="mb-2">
          <label htmlFor={field.name}>{label}</label>
          <input className={`form-control shadow-none ${meta.touched && meta.error && "is-invalid"}`} {...field} {...props} />
          <ErrorMessage component="div" name={field.name} className="error" />
        </div>
      )}
    </div>
  );
};

export default TextField;
