import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Brand = (props) => {
  return (
    <div className="pl-[2.5rem]">
      <Link to="/" className="inline-block w-[12rem] h-[4rem] mt-6">
        <img
          src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/backgrounds/logo-dark.svg"
          alt=""
        />
      </Link>
    </div>
  );
};

Brand.propTypes = {};

export default Brand;
