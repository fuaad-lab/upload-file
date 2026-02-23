import { useState } from "react";

const Login = (props) => {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setUser(username);
  };

  return (
    <div className="bg-[FEFAEC] min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-black text-3xl mb-4">Please Login</h1>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow">
        <input
          type="text"
          placeholder="Enter your username"
          className="border p-2 mb-3 w-full"
          onChange={(e) => setUsername(e.target.value)}
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded w-full">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;