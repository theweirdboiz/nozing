import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <nav className="mb-[2.8rem]">
      <div className="flex items-center border-b border-border-primary min-h-[3.2rem]">
        <h3 className="pr-[2rem] text-[2.4rem] font-bold capitalize border-r border-border-primary">
          Kết quả tìm kiếm
        </h3>
        <ul className="flex  uppercase text-[1.4rem] text-navigation-text font-semibold">
          <li className="relative mx-[2rem] text-white hover:text-white">
            <Link to="" className="block py-[1.5rem]">
              Tất cả
            </Link>
            <span className="absolute block w-full top-full border-b-2 border-purple-primary"></span>
          </li>
          <li className="relative mx-[2rem] text-white hover:text-white">
            <Link to="" className="block py-[1.5rem]">
              Tất cả
            </Link>
            <span className="absolute block w-full top-full border-b-2 border-purple-primary"></span>
          </li>
          <li className="relative mx-[2rem] text-white hover:text-white">
            <Link to="" className="block py-[1.5rem]">
              Tất cả
            </Link>
            <span className="absolute block w-full top-full border-b-2 border-purple-primary"></span>
          </li>
          <li className="relative mx-[2rem] text-white hover:text-white">
            <Link to="" className="block py-[1.5rem]">
              Tất cả
            </Link>
            <span className="absolute block w-full top-full border-b-2 border-purple-primary"></span>
          </li>
          <li className="relative mx-[2rem] text-white hover:text-white">
            <Link to="" className="block py-[1.5rem]">
              Tất cả
            </Link>
            <span className="absolute block w-full top-full border-b-2 border-purple-primary"></span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

Navbar.propTypes = {};

export default Navbar;
