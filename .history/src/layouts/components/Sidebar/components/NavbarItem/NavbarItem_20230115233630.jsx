import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NavbarItem = ({ navbarItem }) => {
  return (
    <li className="cursor-pointer navbar-item">
      <Link className="px-[8px] text-[1.3rem] font-medium">
        {navbarItem.name}
      </Link>
    </li>
  );
};

NavbarItem.propTypes = {
  navbarItem: PropTypes.object.isRequired,
};

export default NavbarItem;
