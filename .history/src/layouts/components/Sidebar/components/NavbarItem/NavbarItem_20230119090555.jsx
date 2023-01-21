import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";

const NavbarItem = ({ navbarItem, path }) => {
  return (
    <li className="cursor-pointer navbar-item">
      <NavLink
        className={`flex gap-x-4 items-center py-[8px] text-[1.3rem] font-semibold pl-[2.5rem] `}
        to={path}
        activeclassname="active"
      >
        {navbarItem.icon}
        <span>{navbarItem.name}</span>
        {navbarItem?.imageLink && <img src={navbarItem.imageLink} alt="" />}
      </NavLink>
    </li>
  );
};

NavbarItem.propTypes = {
  navbarItem: PropTypes.object.isRequired,
  path: PropTypes.string,
};
NavbarItem.defaultProps = {
  path: null,
};

export default NavbarItem;
