import React from "react";
import { Formik, Field, Form } from "formik";
const FormControl = () => {
  return (
    <div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ handleSubmit, handleChange }) => (
          <Form onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input
              onChange={handleChange}
              id="firstName"
              name="firstName"
              placeholder="Jane"
            />
            <label htmlFor="lastName">Last Name</label>
            <input
              onChange={handleChange}
              id="lastName"
              name="lastName"
              placeholder="Doe"
            />
            <label htmlFor="email">Email</label>
            <input
              onChange={handleChange}
              id="email"
              name="email"
              placeholder="jane@acme.com"
              type="email"
            />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormControl;
