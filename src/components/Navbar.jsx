import { Link } from 'react-router';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center border border-red-700 rounded-lg mb-5 border-b-4 text-red-700 px-3 py-2 sticky top-0 bg-white z-50 shadow-md">
      <img
        src="images/logo-kfc.png"
        alt="Logo KFC"
        className="w-auto h-[20px]"
      />
      <div className="menus flex gap-3">
        <Link
          to="/"
          className="hover:bg-gray-200 px-2 md:px-3 py-2 rounded-md transition"
        >
          Home
        </Link>
        <Link
          to="/menu"
          className="hover:bg-gray-200 px-2 md:px-3 py-2 rounded-md transition"
        >
          Menu
        </Link>
        <Link
          to="/contact"
          className="hover:bg-gray-200 px-2 md:px-3 py-2 rounded-md transition"
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
}
