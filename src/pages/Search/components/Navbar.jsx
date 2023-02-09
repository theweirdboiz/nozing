import React from "react";
import PropTypes from "prop-types";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { SearchMenuNavbar } from "@ultis";
import { useSelector } from "react-redux";
import { searchKeywordSelector } from "@redux/selectors";
const Navbar = (props) => {
  const searchKeyword = useSelector(searchKeywordSelector);

  return (
    <>
      <nav className="mb-[2.8rem]">
        <div className="flex items-center border-b border-border-primary min-h-[3.2rem]">
          <h3 className="pr-[2rem] text-[2.4rem] font-bold capitalize border-r border-border-primary">
            Kết quả tìm kiếm
          </h3>
          <ul className="flex  uppercase text-[1.4rem] text-navigation-text font-semibold">
            {SearchMenuNavbar.map((item) => {
              return (
                <li
                  key={item?.id}
                  className="mx-[2rem] relative text-white hover:text-white"
                >
                  <NavLink
                    to={`${item?.path}?q=${searchKeyword}`}
                    className={({ isActive }) =>
                      isActive
                        ? "py-[1.5rem] block relative before:content-[''] before:top-full before:absolute before:w-full before:border-b-2 before:border-purple-primary"
                        : "py-[1.5rem] block"
                    }
                  >
                    {item?.text}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
};

Navbar.propTypes = {};

export default Navbar;
