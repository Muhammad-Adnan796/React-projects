import React from "react";
import { useFormik } from "formik";
import { formSchema } from "./Yup_Form_Schema";

function Formik_Form() {
  const formikinitialValues = {
    name: "",
    email: "",
    age: "",
    password: "",
    confirmPassword: "",
  };
  // Simple Method for formik lib
  const formik = useFormik({
    initialValues: formikinitialValues,
    onSubmit: (values) => {
      console.log(values);
      console.log(values.name);
      console.log(values.email);
    },
  });

  // Destructured Method for formik lib
  const { handleChange, handleSubmit, handleBlur, touched, values, errors } =
    useFormik({
      initialValues: formikinitialValues,
      validationSchema: formSchema,
      onSubmit: (values, action) => {
        console.log(values);
        console.log(values.name);
        console.log(values.email);
        console.log(values.age);
        console.log(values.password);
        console.log(values.confirmPassword);
        action.resetForm();
      },
    });
  return (
    <div>
      <h1> Formik Form Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Enter Name : </label>
        <input
          type="text"
          name="name"
          placeholder="name"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.name}
        />
        <br />
        {errors.name && touched.name ? (
          <span style={{ color: "red", fontSize: "13px" }}>{errors.name}</span>
        ) : null}
        <br />
        <br />
        <label htmlFor="">Enter Email : </label>
        <input
          type="text"
          name="email"
          placeholder="email"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.email}
        />
        <br />
        {errors.email && touched.email ? (
          <span style={{ color: "red", fontSize: "13px" }}>{errors.email}</span>
        ) : null}
        <br />
        <br />
        <label htmlFor="">Enter Age : </label>
        <input
          type="number"
          name="age"
          placeholder="Age"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.age}
        />
        <br />
        {errors.age && touched.age ? (
          <span style={{ color: "red", fontSize: "13px" }}>{errors.age}</span>
        ) : null}
        <br />
        <br />
        <label htmlFor="">Enter Password : </label>
        <input
          type="password"
          name="password"
          placeholder="password"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.password}
        />
        <br />
        {errors.password && touched.password ? (
          <span style={{ color: "red", fontSize: "13px" }}>
            {errors.password}
          </span>
        ) : null}
        <br />
        <br />
        <label htmlFor="">Enter Confirm Password : </label>
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.confirmPassword}
        />
        <br />
        {errors.confirmPassword && touched.confirmPassword ? (
          <span style={{ color: "red", fontSize: "13px" }}>
            {errors.confirmPassword}
          </span>
        ) : null}
        <br />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

export { Formik_Form };
