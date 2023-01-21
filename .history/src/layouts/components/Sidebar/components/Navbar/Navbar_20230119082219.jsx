import React from "react";
import PropTypes from "prop-types";
import NavbarItem from "../NavbarItem/NavbarItem";

const Navbar = ({ navbarList, publicRoutes }) => {
  return (
    <ul className="my-5">
      {navbarList.map((navbarItem, index) => {
        const route = publicRoutes[index];
        console.log(route.path);
        return (
          <></>
          // <NavbarItem navbarItem={navbarItem} key={index} path={route.path} />
        );
      })}
    </ul>
  );
};
Navbar.propTypes = {
  navbarList: PropTypes.array.isRequired,
};

export default Navbar;
