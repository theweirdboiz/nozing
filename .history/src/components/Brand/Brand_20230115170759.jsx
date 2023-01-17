import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import brandLogo from "@assets/imgs/logo.svg";

const Brand = (props) => {
  return (
    <Link to="/">
      <img src={brandLogo} alt="" />
    </Link>
  );
};

Brand.propTypes = {};

export default Brand;
