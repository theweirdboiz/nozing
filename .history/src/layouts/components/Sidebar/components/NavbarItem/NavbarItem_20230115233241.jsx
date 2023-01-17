import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NavbarItem = ({ navbarItem }) => {
  return (
    <li className="cursor-pointer">
      <Link>{navbarItem.name}</Link>
    </li>
  );
};

NavbarItem.propTypes = {
  navbarItem: PropTypes.object.isRequired,
};

export default NavbarItem;
