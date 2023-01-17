import React from "react";
import PropTypes from "prop-types";

const Navbar = ({ NavbarList }) => {
  return <div className="my-5">navbar</div>;
};

Navbar.propTypes = {
  NavbarList: PropTypes.array.isRequired,
};

export default Navbar;
