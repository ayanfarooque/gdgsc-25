import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-teal-700 shadow-md p-4 flex justify-between items-center">
      <h1 className="text-white text-xl font-bold">E-LEARNING</h1>
      <FaUserCircle className="text-teal-600 text-3xl cursor-pointer" />
    </nav>
  );
};

export default Navbar;
