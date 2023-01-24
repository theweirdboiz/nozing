import React from "react";
import PropTypes from "prop-types";

const GallaryItem = ({ item, classList }) => {
  return (
    <div className={classList} key={item.encodeId}>
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
