import React from "react";
import PropTypes from "prop-types";

const GallaryItem = ({ item, classList }) => {
  return (
    <div className={classList}>
      <figure className="gallary__img">
        <img src={item.banner} alt="" />
      </figure>
    </div>
  );
};

GallaryItem.propTypes = {};

export default GallaryItem;
