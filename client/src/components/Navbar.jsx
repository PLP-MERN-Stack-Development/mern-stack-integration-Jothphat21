import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-blue-600">MERN Blog</Link>

      <div className="space-x-4">
        <Link to="/">Home</Link>
        {user && <Link to="/create">New Post</Link>}
        {!user ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        ) : (
          <button onClick={logout} className="text-red-500">Logout</button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
