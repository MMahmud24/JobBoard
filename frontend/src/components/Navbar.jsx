import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">JobAI</Link>
        <div className="space-x-4">
          <Link to="/jobs" className="text-gray-700 hover:text-blue-600">Jobs</Link>
          <Link to="/generate-resume" className="text-gray-700 hover:text-blue-600">Generate Resume</Link>
          <Link to="/login" className="text-gray-700 hover:text-blue-600">Login</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
