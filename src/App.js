import { Formik, Form } from "formik";
import * as Yup from "yup";
import rocketImg from "./assets/rocket.png";

import TextField from "./TextField";

const App = () => {
  const validate = Yup.object({
    firstName: Yup.string().max(15, "Must be 15 characters or less"),
    lastName: Yup.string().max(20, "Must be 20 characters or less").required("Required"),
    email: Yup.string().email("Email is Invalid").required("Email is required"),
    password: Yup.string()
      .required("Password is Required")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must match")
      .required("Confirm Password is Required"),
    hobbies: Yup.string().required("Hobby is required"),
  });
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-5">
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              password: "",
              confirmPassword: "",
              hobbies: "",
            }}
            validationSchema={validate}
            onSubmit={(values) => alert(JSON.stringify(values))}
            vali>
            {(formik) => (
              <div className="w-100">
                <h1 className="my-4 font-weight-bold-display-4">Sign Up</h1>
                <Form>
                  <TextField label="First Name" name="firstName" type="text" />
                  <TextField label="Last Name" name="lastName" type="text" />
                  <TextField label="Email" name="email" type="email" />
                  <TextField label="Password" name="password" type="password" />
                  <TextField label="Confirm Password" name="confirmPassword" type="password" />
                  <TextField label="Hobbies" name="hobbies" type="select" />
                  <button type="submit" disabled={!(formik.isValid && formik.dirty)} className="btn btn-primary mt-3">
                    Submit
                  </button>
                  <button type="reset" className="btn btn-danger mt-3 ml-3">
                    Reset
                  </button>
                </Form>
              </div>
            )}
          </Formik>
        </div>
        <div className="col-md-7 my-auto">
          <img className="img-fluid w-100" src={rocketImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default App;
