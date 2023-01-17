import React from "react";
import PropTypes from "prop-types";

const Navbar = ({ navbarList }) => {
  return <div className="my-5">navbar</div>;
};

Navbar.propTypes = {
  navbarList: PropTypes.array.isRequired,
};

export default Navbar;
