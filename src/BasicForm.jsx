
import { useFormik } from "formik";
import * as yup from "yup";



const formvalidation = yup.object({
    email: yup
    .string()
    .email()
    .required()
    .min(15,"Need a valid email address"),
    
    password: yup
    .string()
    .required("please fill the Password")
    .min(8,"Need a valid password address")
    .max(12, "password is too long")
  })

export function BasicForm() {
  
  const {handleSubmit, touched, errors, values, handleChange, handleBlur} = 
  useFormik({
    initialValues : {email : "" , password : ""},
    validationSchema: formvalidation,
    onSubmit: (values) => console.log("Form Values: ", values),


});
  return (   
    <form onSubmit={handleSubmit}>
      <input
      name = "email" 
      onBlur={handleBlur}
      onChange={handleChange}
      value = {values.email} 
      type="email" 
      placeholder="email" 
      />
      {touched.email && errors.email ? errors.email : null}
      <input 
      name = "password"
      onBlur={handleBlur}
      onChange={handleChange}
      value = {values.password} 
      type="text" 
      placeholder="password"
      />
      {touched.password && errors.password ? errors.password : null}
      <button type="submit">summit</button>
      {/* <br />
      Values
      <pre>{JSON.stringify(values)}</pre>
      Error
      <pre>{JSON.stringify(errors)}</pre>
      Touched
      <pre>{JSON.stringify(touched)}</pre> */}
    </form>
  );
}
