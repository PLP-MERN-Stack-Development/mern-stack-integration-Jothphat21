import { useState } from "react";
import { useAuth } from "../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login({ email, password });
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow max-w-sm mx-auto">
      <h2 className="text-xl font-semibold mb-4">Login</h2>
      <input type="email" placeholder="Email" className="w-full border p-2 mb-3" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" className="w-full border p-2 mb-3" onChange={(e) => setPassword(e.target.value)} />
      <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded">Login</button>
    </form>
  );
};

export default Login;
