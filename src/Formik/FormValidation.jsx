import React from "react";
import { useFormik } from "formik";
import validationSchema from "./validations";
const FormValidation = () => {
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
        passwordConfirm: "",
      },
      onSubmit: (values) => {
        console.log(values);
      },
      validationSchema,
    });
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email: </label>
      {touched.email && errors.email && <div>email is not valid</div>}
      <input
        id="email"
        type="email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <br />

      <label htmlFor="password">Password: </label>
      {errors.password}
      <input
        id="password"
        type="text"
        value={values.password}
        onChange={handleChange}
      />
      <br />

      <label htmlFor="passwordConfirm">Confirm Password: </label>
      {errors.passwordConfirm}
      <input
        id="passwordConfirm"
        type="text"
        value={values.passwordConfirm}
        onChange={handleChange}
      />
      <br />
      <button type="submit">Submit</button>
      {JSON.stringify(values)}
    </form>
  );
};

export default FormValidation;
