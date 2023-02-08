import React from "react";
import PropTypes from "prop-types";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { SearchMenuNavbar } from "@ultis";

const Navbar = (props) => {
  const navigator = useNavigate();
  const handleNavigate = (link) => {
    navigator(link);
  };
  return (
    <nav className="mb-[2.8rem]">
      <div className="flex items-center border-b border-border-primary min-h-[3.2rem]">
        <h3 className="pr-[2rem] text-[2.4rem] font-bold capitalize border-r border-border-primary">
          Kết quả tìm kiếm
        </h3>
        <ul className="flex  uppercase text-[1.4rem] text-navigation-text font-semibold">
          {SearchMenuNavbar.map((item) => {
            return (
              <li
                onClick={() => handleNavigate(item?.path)}
                key={item?.path}
                className="relative mx-[2rem] text-white hover:text-white"
              >
                <div className="py-[1.5rem]">{item?.text}</div>
                <span className="absolute block w-full top-full border-b-2 border-purple-primary"></span>
              </li>
            );
          })}
          {/*         
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
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

Navbar.propTypes = {};

export default Navbar;
