import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/church.png";
import MobileMenu from "./MobileMenu";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle function
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="py-1 px-4 max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="logo" className="h-12" />
            <div className="leading-tight">
              <h1 className="text-2xl font-bold font-serif text-sky-600">
                Philadelphia
              </h1>
              <h2 className="text-lg font-bold font-serif ml-1">Fellowship</h2>
            </div>
          </Link>

          {/* Desktop menu */}
          <ul className="hidden md:flex gap-10 text-xl font-semibold">
            <NavLink to="/"><li className="hover:text-sky-600">Home</li></NavLink>
            <NavLink to="/members"><li className="hover:text-sky-600">Member's</li></NavLink>
            <NavLink to="/aboutus"><li className="hover:text-sky-600">About Us</li></NavLink>
            <NavLink to="/programme"><li className="hover:text-sky-600">Programme's</li></NavLink>
            <NavLink to="/contact"><li className="hover:text-sky-600">Contact</li></NavLink>
          </ul>

          {/* Hamburger Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-3xl text-sky-700">
              ☰
            </button>
          </div>
        </div>

        {/* Mobile menu (toggle) */}
        {isOpen && <MobileMenu closeMenu={toggleMenu} />}
      </div>
    </nav>
  );
};

export default Navbar;
