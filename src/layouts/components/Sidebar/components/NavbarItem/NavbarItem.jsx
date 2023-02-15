import React, { memo, useState } from "react";
import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";

const NavbarItem = ({ navbarItem, path }) => {
  return (
    <li className="cursor-pointer navbar-item">
      <NavLink
        className={`flex gap-x-4 items-center py-[1.5rem] md:py-[8px] text-[1.3rem] font-semibold pl-[2.5rem] `}
        to={path}
        activeclassname="active"
      >
        {navbarItem.icon}
        <span className="hidden md:inline">{navbarItem.name}</span>
        {navbarItem?.imageLink && (
          <img className="hidden md:block" src={navbarItem.imageLink} alt="" />
        )}
      </NavLink>
    </li>
  );
};

NavbarItem.propTypes = {
  navbarItem: PropTypes.object.isRequired,
  path: PropTypes.string,
};
NavbarItem.defaultProps = {
  path: "/error",
};

export default memo(NavbarItem);
