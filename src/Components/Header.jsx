import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";

const Header = () => {
  const [menuOpen, SetMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    SetMenuOpen((prev) => !prev);
  };


  return (
    <div className="shadow">
      <nav className="text-xl text-gray-900 bg-gray-50 container mx-auto flex justify-between items-center p-3">
        <h1 className="text-2xl font-semibold">IfoodNow</h1>
      
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-xl">
            <FontAwesomeIcon icon={menuOpen ? faX : faBars} />
          </button>
        </div>

       
        {menuOpen && (
          <div className="text-sm font-semibold absolute top-12 right-0  bg-white px-5 py-3 shadow-lg flex flex-col space-y-2 z-10 lg:hidden">
            <Link to="/" onClick={() => SetMenuOpen(false)}>Home</Link>
            <Link to="/login" onClick={() => SetMenuOpen(false)}>Login</Link>
          </div>
        )}

       
        <ul className="text-sm font-semibold flex space-x-6 max-lg:hidden">
          <li>
            <Link to="/" className="flex items-center">
              <FontAwesomeIcon icon={faHouse} className="mr-1" /> Home
            </Link>
          </li>
          <li>
            <Link to="/login" className="flex items-center">
              <FontAwesomeIcon icon={faUser} className="mr-1" /> Login
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
