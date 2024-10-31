import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // console.log(handleLogin);

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex flex-col gap-5 h-screen w-screen items-center justify-center py-4">
      <div className="flex flex-col text-center gap-2">
        <h1 className="text-3xl font-semibold">EMPLOYEE MANAGEMENT</h1>
        <h3 className="text-gray-200 text-[1.1rem] bg-emerald-800 px-3 py-1 rounded"><strong>COPY</strong> and <strong>PASTE</strong>  the email and password to view the Admin and Employee Dashboard</h3>
      </div>
      <div className="border-[1px] w-[50%] rounded-lg border-emerald-200  py-10 px-10">
        <div className="flex w-full justify-between">
          <div className="flex flex-col gap-1">
            <h2 className="bg-red-500 px-2 py-1 rounded">ADMIN</h2>
            <h2>
              <span className="font-semibold text-lg">Email:</span> admin@me.com
            </h2>
            <h2>
              <span className="font-semibold text-lg">Password:</span> 123
            </h2>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="bg-red-500 px-2 py-1 rounded">USER</h2>
            <h2>
              <span className="font-semibold text-lg">Email:</span>{" "}
              employee1@example.com
            </h2>
            <h2>
              <span className="font-semibold text-lg">Password:</span> 123
            </h2>
          </div>
        </div>

        <div className="mt-3">
          <form
            onSubmit={(e) => submitHandler(e)}
            className="flex flex-col items-center justify-center"
            action=""
          >
            <input
              onChange={(e) => setEmail(e.target.value)}
              required
              className="text-white w-full bg-transparent outline-none border-2 border-emerald-600 rounded mb-5 py-2 px-2"
              type="email"
              placeholder="Enter your email"
              value={email}
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              required
              className="text-white w-full bg-transparent outline-none border-2 border-emerald-600  rounded mb-5  py-2 px-2"
              type="password"
              placeholder="Enter your password"
              value={password}
            />
            <button className="bg-emerald-700 w-full rounded py-2 hover:bg-emerald-600">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
