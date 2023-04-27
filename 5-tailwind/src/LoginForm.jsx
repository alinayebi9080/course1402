import { useEffect, useRef, useState } from "react";
//Controlled Component

const initialValues = {
  username: "",
  password: "",
};

const LoginForm = () => {
  const [form, setForm] = useState(initialValues);
  const [error, setError] = useState({ username: "", password: "" });

  const usernameInput = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form.username, form.password);
    setError("username or password is wrong");
  };

  const handleChange = (e) => {
    if (e.target.name === "username") {
      const username = e.target.value;
      if (username.length < 3) {
        setError({ ...error, username: "username is too short." });
      } else {
        setError({ ...error, username: "" });
      }
    }
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    usernameInput.current.focus();
  }, []);

  return (
    <div className="container">
      <form
        className="shadow-md mt-10 border rounded-md p-4 mx-auto max-w-lg flex flex-col"
        onSubmit={handleSubmit}
        onChange={handleChange}
      >
        <h2 className="text-center font-bold text-3xl my-8">LOGIN</h2>
        <div className="flex justify-between items-center">
          <label>username</label>
          <input
            placeholder="username"
            type="text"
            name="username"
            value={form.username}
            ref={usernameInput}
            className="border rounded p-2"
          />
        </div>
        {error && <p className="text-rose-500">{error.username}</p>}

        <div className="flex justify-between my-4 items-center">
          <label>password</label>
          <input
            placeholder="password"
            type="password"
            name="password"
            value={form.password}
            className="border rounded p-2"
          />
        </div>

        {error && <p>{error.password}</p>}
        <button className="bg-blue-500 text-white p-2" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
