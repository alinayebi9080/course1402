import TextField from "../components/common/TextField";
import Button from "../components/common/Button";
import { useFormik } from "formik";
import useMutation from "../hook/useMutation";
import { login } from "../service/userService";
import { Navigate, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  const navigate = useNavigate();

  const { setUser, user } = useContext(AuthContext);

  const { mutate } = useMutation(login, (data) => {
    setUser(data);
    navigate("/");
  });

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      mutate(values);
    },
  });

  if (user) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="container">
      <form
        className="shadow-md mt-10 border rounded-md p-4 mx-auto max-w-lg flex flex-col"
        onSubmit={formik.handleSubmit}
      >
        <h2 className="text-center font-bold text-3xl my-8">ورود</h2>
        <TextField label={"ایمیل"} name={"email"} formik={formik} />
        <TextField
          label={"رمز عبور"}
          name={"password"}
          formik={formik}
          type="password"
        />
        <Button label={"ورود"} formik={formik} />
      </form>
    </div>
  );
};

export default Login;
