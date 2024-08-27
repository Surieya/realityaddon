import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">RealityAddon</div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to={"/"} className="text-gray-300 hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to={"/services"} className="text-gray-300 hover:text-white">
                Services
              </Link>
            </li>
            <li>
              <Link to={"/about"} className="text-gray-300 hover:text-white">
                About
              </Link>
            </li>
            {/* <li>
              <Link
                to={"/contactus"}
                className="text-gray-300 hover:text-white"
              >
                Contact
              </Link>
            </li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
