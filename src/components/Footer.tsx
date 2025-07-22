import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-sky-600 text-white py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <p className="text-sm">&copy; {new Date().getFullYear()} Philadelphia Fellowship. All rights reserved.</p>

        <div className="mt-4 md:mt-0 flex space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/members" className="hover:underline">Member's</Link>
          <Link to="/aboutus" className="hover:underline">About Us</Link>
          <Link to="/programme" className="hover:underline">programmes</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </div>
      </div>
    </footer>
  );
}; 

export default Footer;
