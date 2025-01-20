import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import { HiOutlineUser } from 'react-icons/hi';

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-green-500 to-green-700 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-3xl font-bold">
          <Link to="/">eSewa Clone</Link>
        </h1>

        {/* Search Bar */}
        <div className="flex items-center gap-4">
          <FiSearch size={24} className="cursor-pointer" />
        </div>

        {/* Login and Register Buttons */}
        <div className="flex items-center gap-4">
          <Link to="/login" className="flex items-center gap-1 px-4 py-2 bg-white text-green-700 rounded-md hover:bg-gray-200">
            <HiOutlineUser size={20} />
            Login
          </Link>
          <Link to="/register" className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}
