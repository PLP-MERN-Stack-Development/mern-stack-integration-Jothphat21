import { useState } from "react";
import { useAuth } from "../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const { register } = useAuth();
  const navigate = useNavigate();

  // Unified change handler using "name" attributes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

   const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(form); // Pass full form object
      navigate("/");        // Redirect on success
    } catch (err) {
      console.error("Registration failed:", err.response?.data || err);
      alert(err.response?.data?.message || "Registration failed"); // Show error to user
    }
   };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow max-w-sm mx-auto">
      <h2 className="text-xl font-semibold mb-4">Register</h2>

      <input
        type="text"
        name="name"                    // Must have "name" for handleChange
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        className="w-full border p-2 mb-3"
        required
      />

      <input
        type="email"
        name="email"                  // Must have "name"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        className="w-full border p-2 mb-3"
        required
      />

      <input
        type="password"
        name="password"               // Must have "name"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        className="w-full border p-2 mb-3"
        required
      />
      <button className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded">Register</button>
    </form>
  );
};

export default Register;
