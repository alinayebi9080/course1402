import { useRef, useState } from "react";
//unControlled Component

const LoginRef = () => {
  const [username, setUsername] = useState();
  const password = useRef();
  const count = useRef(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(password.current);
  };

  count.current++;
  console.log("render", count.current);
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
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            name="username"
            className="border rounded p-2"
          />
        </div>
        <div className="flex justify-between my-4 items-center">
          <label>password</label>
          <input
            placeholder="password"
            type="password"
            name="password"
            onChange={(e) => (password.current = e.target.value)}
            className="border rounded p-2"
          />
        </div>
        <button className="bg-blue-500 text-white p-2" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginRef;
