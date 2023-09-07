import React from "react";
import "../styleComponents/sass/_Contact.scss";
import { useFormik } from "formik";
import { formSchema } from "./Forms";


const Contact = () => {
  const { handleSubmit, handleChange, handleBlur, touched, values, errors } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
      validationSchema: formSchema,
      onSubmit: (value, action) => {
        action.resetForm();
      },
    });

  return (
    <div className="contact">
     <a id="contact"></a>
      <div className="contact-txt">
        <h1>GET IN TOUCH</h1>
        <hr />
        <p>
          We thrive when coming up with innovative ideas but also understand
          that a smart concept should be supported with faucibus sapien odio
          measurable results.
        </p>
      </div>

      <div className="form-field">
        <div className="address">
          <div>
            <h3>Office Address 1:</h3>
            <span>4461 Cedar Street Moro, AR 72368</span>
          </div>
          <div>
            <h3>Office Address 2:</h3>
            <span>2467 Swick Hill Street New Orleans, LA 70171</span>
          </div>
          <div>
            <h3>Working Hours:</h3>
            <span>9:00AM To 6:00PM</span>
          </div>
        </div>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div>
              <span>
                <input
                  type="text"
                  name="name"
                  value={values.name}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Your name*"
                />{" "}
                <br />
                {errors.name && touched.name && <p style={{fontSize:'14px',color:'red'}} >{errors.name}</p>}
              </span>

              <span>
                <input
                  type="text"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Your email*"
                />{" "}
                <br />
                {errors.email && touched.email && <p style={{fontSize:'14px',color:'red'}} >{errors.email}</p>}
              </span>
            </div>


            <span className="inp" >
              <input
                type="text"
                name="subject"
                value={values.subject}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Your Subject..."
              />{" "}
              <br />
              {errors.subject && touched.subject && <p style={{fontSize:'14px',color:'red'}} >{errors.subject}</p>}
            </span>
            <span className="txtarea">
              <textarea
                name="message"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                cols="30"
                rows="10"
                placeholder="Your message..."
              ></textarea>{" "}
              <br />
              {errors.message && touched.message && <p style={{fontSize:'14px',color:'red'}}  >{errors.message}</p>}
            </span>
          </form>
          <button onClick={handleSubmit}>Send Message</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
