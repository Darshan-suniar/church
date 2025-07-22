import { NavLink } from "react-router-dom";

interface Props {
  closeMenu: () => void;
}

const MobileMenu = ({ closeMenu }: Props) => {
  return (
    <ul className="flex flex-col mt-4 gap-4 text-lg font-medium md:hidden">
      <NavLink to="/" onClick={closeMenu}>
        <li className="hover:text-sky-600">Home</li>
      </NavLink>
      <NavLink to="/members" onClick={closeMenu}>
        <li className="hover:text-sky-600">Member's</li>
      </NavLink>
      <NavLink to="/aboutus" onClick={closeMenu}>
        <li className="hover:text-sky-600">About Us</li>
      </NavLink>
      <NavLink to="/programme" onClick={closeMenu}>
        <li className="hover:text-sky-600">Programme's</li>
      </NavLink>
      <NavLink to="/contact" onClick={closeMenu}>
        <li className="hover:text-sky-600">Contact</li>
      </NavLink>
    </ul>
  );
};

export default MobileMenu;
