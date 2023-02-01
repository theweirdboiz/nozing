import React, { memo } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

const Album = (props) => {
  return (
    <div>
      <h3>Chút nhạc chill chill</h3>
      <div className="grid grid-cols-5">
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
      </div>
    </div>
  );
};

Album.propTypes = {};

export default memo(Album);
