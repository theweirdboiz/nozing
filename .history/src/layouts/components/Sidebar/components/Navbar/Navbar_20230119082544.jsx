import React from "react";
import PropTypes from "prop-types";
import NavbarItem from "../NavbarItem/NavbarItem";

const Navbar = ({ navbarList, publicRoutes }) => {
  return (
    <ul className="my-5">
      {navbarList.map((navbarItem, index) => {
        return (
          <NavbarItem
            navbarItem={navbarItem}
            key={index}
            path={publicRoutes[index].path}
          />
        );
      })}
    </ul>
  );
};
Navbar.propTypes = {
  navbarList: PropTypes.array,
  publicRoutes: PropTypes.array,
};
Navbar.defaultProps = {
  navbarList: [],
  publicRoutes: [],
};

export default Navbar;
