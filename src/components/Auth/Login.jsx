import React, { useState } from "react";

const Login = ({handleLogin}) => {
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
    <div className="flex h-screen w-screen items-center justify-center py-4">
      <div className="border-2 rounded-lg border-emerald-200  p-20">
        <form
          onSubmit={(e) => submitHandler(e)}
          className="flex flex-col items-center justify-center"
          action=""
        >
          <input
            onChange={(e) => setEmail(e.target.value)}
            required
            className="text-white bg-transparent outline-none border-2 border-emerald-600 rounded mb-5 py-2 px-2"
            type="email"
            placeholder="Enter your email:"
            value={email}
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            required
            className="text-white bg-transparent outline-none border-2 border-emerald-600  rounded mb-5  py-2 px-2"
            type="password"
            placeholder="Enter your password:"
            value={password}
          />
          <button className="bg-slate-400 w-full rounded py-2">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
