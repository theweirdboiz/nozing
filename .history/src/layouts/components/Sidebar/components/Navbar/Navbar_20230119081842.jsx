import React from "react";
import PropTypes from "prop-types";
import NavbarItem from "../NavbarItem/NavbarItem";

const Navbar = ({ navbarList, publicRoutes }) => {
  console.log(publicRoutes[0]);
  return (
    <ul className="my-5">
      {navbarList.map((navbarItem, index) => {
        return (
          <NavbarItem
            navbarItem={navbarItem}
            key={index}
            path={publicRoutes[Number.parseInt(index)].path}
          />
        );
      })}
    </ul>
  );
};
Navbar.propTypes = {
  navbarList: PropTypes.array.isRequired,
};

export default Navbar;
