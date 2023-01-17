import React from "react";
import PropTypes from "prop-types";

const CardSong = (props) => {
  return (
    <div className="flex bg-purple-primary rounded-xl items-center p-2 gap-x-3">
      <figure className="w-[4rem] h-[4rem] rounded-lg overflow-hidden">
        <img
          src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/avatars/7/4/2/a/742adf703cc6b4acf4ec6f4ac6e2bb76.jpg"
          alt=""
        />
      </figure>
      <div className="">
        <h3>Tết này con sẽ về</h3>
        <span>Bùi Công Nam</span>
      </div>
    </div>
  );
};

CardSong.propTypes = {};

export default CardSong;
