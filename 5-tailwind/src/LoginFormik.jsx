import { useFormik } from "formik";
import { loginValidationSchema } from "./util/validation";
import TextField from "./components/TextField";
import Button from "./components/Button";

const initialValues = {
  username: "",
  password: "",
};

const LoginFormik = () => {
  const formik = useFormik({
    initialValues,
    validationSchema: loginValidationSchema,
    validateOnMount: true,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="container">
      <form
        className="shadow-md mt-10 border rounded-md p-4 mx-auto max-w-lg flex flex-col"
        onSubmit={formik.handleSubmit}
      >
        <h2 className="text-center font-bold text-3xl my-8">LOGIN</h2>
        <TextField label={"username"} formik={formik} />
        <TextField label={"password"} formik={formik} type="password" />
        <Button label={"Login"} formik={formik} />
      </form>
    </div>
  );
};

export default LoginFormik;
