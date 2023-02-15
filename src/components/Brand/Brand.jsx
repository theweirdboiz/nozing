import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Brand = (props) => {
  return (
    <div className="pl-[1.2rem] md:pl-[2.5rem]">
      <Link to="/" className="inline-block md:w-[12rem] md:h-[4rem] mt-6">
        <img
          className="hidden md:block"
          src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/backgrounds/logo-dark.svg"
          alt=""
        />
        <img
          className="block md:hidden"
          src="https://zjs.zmdcdn.me/zmp3-desktop/dev/119956/static/media/icon_zing_mp3_60.f6b51045.svg"
          alt=""
        />
      </Link>
    </div>
  );
};

Brand.propTypes = {};

export default Brand;
