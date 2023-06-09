import { Field, Formik, Form, ErrorMessage } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import { RedErrorMessage } from "./RedErrorMessage";

function Formik_Form_2() {
  const [formData, setformData] = useState({});

  const NewValidations = Yup.object({
    name: Yup.string().required("Name must required"),
    email: Yup.string().email().required("Email must required"),
    age: Yup.number().min(10).max(50).required("Age must required"),
    password: Yup.string()
      .required("Password must required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Enter strong password"
      ),
    confirmPassword: Yup.string()
      .required("Confirm password must required")
      .oneOf([Yup.ref("password"), null], "Both passwordF must be same"),
    gender: Yup.string().required("Gender must required"),
    hobby: Yup.array().min(1, "Check atleast 1 hobby"),
    country: Yup.string().required("Select at least 1 country"),
    comments: Yup.string().max(500).required("Comments must required"),
  });

  return (
    <>
      <h1>Formik Form 2 Sign Up</h1>
      <div className="form">
        <div className="form_fields">
          <Formik
            validationSchema={NewValidations}
            initialValues={{
              name: "",
              email: "",
              age: "",
              password: "",
              confirmPassword: "",
              gender: "",
              hobby: [],
              country: "",
              comments: "",
            }}
            onSubmit={(values) => {
              console.log(values.name);
              console.log(values.email);
              console.log(values.age);
              console.log(values.password);
              console.log(values.confirmPassword);
              console.log(values.gender);
              console.log(values.hobby);
              console.log(values.country);
              console.log(values.comments);
              setformData(values);
            }}
          >
            <Form>
              <label htmlFor="">Enter Name : </label>
              <Field type="text" name="name" placeholder="enter name" />
              <br />
              <RedErrorMessage name="name" />
              <br />
              <label htmlFor="">Enter Email : </label>
              <Field type="text" name="email" placeholder="enter email" />
              <br />
              <RedErrorMessage name="email" />
              <br />
              <label htmlFor="">Enter Age : </label>
              <Field type="number" name="age" placeholder="enter age" />
              <br />
              <RedErrorMessage name="age" />
              <br />
              <label htmlFor="">Enter Password : </label>
              <Field
                type="password"
                name="password"
                placeholder="enter password"
              />
              <br />
              <RedErrorMessage name="password" />
              <br />
              <label htmlFor="">Enter Confirm Password : </label>
              <Field
                type="password"
                name="confirmPassword"
                placeholder="enter confirm password"
              />
              <br />
              <RedErrorMessage name="confirmPassword" />
              <br />
              <label htmlFor="">Gender : &nbsp;&nbsp;&nbsp;</label>
              <label htmlFor="">Male</label>&nbsp;
              <Field type="radio" name="gender" value="male" />
              &nbsp;&nbsp;
              <label htmlFor="">Female</label>&nbsp;
              <Field type="radio" name="gender" value="female" />
              &nbsp;&nbsp;
              <br />
              <RedErrorMessage name="gender" />
              <br />
              <label htmlFor="">Hobbies : </label>&nbsp;&nbsp;&nbsp;
              <label htmlFor="">Writing &nbsp;</label>
              <Field type="checkbox" name="hobby" value="Writing" />
              <label htmlFor="">Reading &nbsp;</label>
              <Field type="checkbox" name="hobby" value="Reading" />
              <label htmlFor="">Sleeping &nbsp;</label>
              <Field type="checkbox" name="hobby" value="Sleeping" />
              <br />
              <RedErrorMessage name="hobby" />
              <br />
              <label htmlFor="">Country : &nbsp;&nbsp;&nbsp;</label>
              <Field name="country" as="select">
                <option value="">Select</option>
                <option value="Canada">Canada</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="India">India</option>
              </Field>
              <br />
              <RedErrorMessage name="country" />
              <br />
              <label htmlFor="">Comments: &nbsp;&nbsp;&nbsp;</label>
              <Field name="comments" as="textarea" />
              <br />
              <RedErrorMessage name="comments" />
              <br />
              <button type="submit">Submit</button>
            </Form>
          </Formik>
        </div>
        <div className="form_Outputs">
          <h1>Name : {formData.name}</h1>
          <h1>Email :  {formData.email}</h1>
          <h1>Age : {formData.age}</h1>
          <h1>Password : {formData.password}</h1>
          <h1>Confirm Password : {formData.confirmPassword}</h1>
          <h1>Gender : {formData.gender}</h1>
          <h1>Hobby : {formData.hobby}</h1>
          <h1>Country : {formData.country}</h1>
          <h1>Comments : {formData.comments}</h1>
        </div>
      </div>
    </>
  );
}

export { Formik_Form_2 };
