import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Brand = (props) => {
  return (
    <Link to="/" className="inline-block w-[12rem] h-[4rem] mt-6">
      <img
        src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/backgrounds/logo-dark.svg"
        alt=""
      />
    </Link>
  );
};

Brand.propTypes = {};

export default Brand;
