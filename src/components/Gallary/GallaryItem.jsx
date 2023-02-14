import React, { memo } from "react";
import PropTypes from "prop-types";

const GallaryItem = ({ item, classList, handleClickBanner }) => {
  return (
    <div
      className={`${classList} cursor-pointer`}
      onClick={() => handleClickBanner(item)}
    >
      <figure className="gallary__img">
        <img src={item.banner} alt="" />
      </figure>
    </div>
  );
};

GallaryItem.propTypes = {};

export default memo(GallaryItem);
