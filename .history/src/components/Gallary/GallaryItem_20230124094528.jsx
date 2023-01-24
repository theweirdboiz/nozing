import React from "react";
import PropTypes from "prop-types";

const GallaryItem = ({ item, classList, handleClickBanner }) => {
  return (
    <div className={classList} onClick={handleClickBanner(item)}>
      <a href={item.link}>
        <figure className="gallary__img">
          <img src={item.banner} alt="" />
        </figure>
      </a>
    </div>
  );
};

GallaryItem.propTypes = {};

export default GallaryItem;
