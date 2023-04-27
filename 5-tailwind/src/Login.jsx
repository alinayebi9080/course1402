import { useEffect, useRef, useState } from "react";
//Controlled Component

const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const usernameInput = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    // api call

    //error case
    setPassword("");
  };

  useEffect(() => {
    usernameInput.current.focus();
  }, []);

  return (
    <div className="container">
      <form
        className="shadow-md mt-10 border rounded-md p-4 mx-auto max-w-lg flex flex-col"
        onSubmit={handleSubmit}
      >
        <h2 className="text-center font-bold text-3xl my-8">LOGIN</h2>
        <div className="flex justify-between items-center">
          <label>username</label>
          <input
            placeholder="username"
            type="text"
            name="username"
            ref={usernameInput}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border rounded p-2"
          />
        </div>
        <div className="flex justify-between my-4 items-center">
          <label>password</label>
          <input
            placeholder="password"
            type="password"
            name="password"
            value={password}
            className="border rounded p-2"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="bg-blue-500 text-white p-2" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
