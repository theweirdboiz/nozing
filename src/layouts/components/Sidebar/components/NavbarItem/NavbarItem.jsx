import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NavbarItem = ({ navbarItem }) => {
  return (
    <li className="cursor-pointer navbar-item">
      <Link className="inline-flex gap-x-4 items-center py-[8px] text-[1.3rem] font-semibold">
        {navbarItem.icon}
        <span>{navbarItem.name}</span>
        {navbarItem?.imageLink && <img src={navbarItem.imageLink} alt="" />}
      </Link>
    </li>
  );
};

NavbarItem.propTypes = {
  navbarItem: PropTypes.object.isRequired,
};

export default NavbarItem;
