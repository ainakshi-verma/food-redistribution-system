import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="p-4 bg-gray-800 text-white flex justify-between">
      <h2>FoodConnect</h2>

      <div className="flex gap-4">
        <Link to="/login">
          <button className="bg-black px-4 py-2 rounded">Login</button>
        </Link>

        <Link to="/signup">
          <button className="bg-black px-4 py-2 rounded">Sign Up</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;