import { Formik, Field, ErrorMessage, Form} from "formik";
import * as Yup from "yup" ;

const RegistrationForm = () =>{
    return (
        <Formik
         initialValues={
            {username:"",
             email:"",
             password:"",

         }
        }
        validationSchema={Yup.object({
            username:Yup.string().required("This field is required.")
            .max(10, "Must be 10 characters or less.").required("This field is required."),
            email:Yup.string().required("This field is required.")
            .email("Invalid email address."),
            password:Yup.string().required("This field is required.")
            .min(4,"Must be between 4 and 12 characters.")
            .max(12,"Must be between 4 and 12 characters."),

        })}
        onsubmit={values=>{
            console.log(values);
        }}
        >

      <Form>
      <label htmlFor="username">Username</label>
      <Field name="username" type="text" />
      <ErrorMessage name="username" />

      <label htmlFor="email">Email</label>
      <Field name="email" type="email" />
      <ErrorMessage name="email" />

      <label htmlFor="password">Password</label>
      <Field name="password" type="password" />
      <ErrorMessage name="password" />

      <button type="submit">Register</button>
      </Form>
    </Formik>

    )
}

export default RegistrationForm;