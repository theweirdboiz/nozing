import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CardSong = (props) => {
  return (
    <div className="flex bg-purple-primary rounded-xl items-center p-3 gap-x-3 relative group/item">
      <figure className="w-[4rem] h-[4rem] rounded-lg overflow-hidden">
        <img
          src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/avatars/7/4/2/a/742adf703cc6b4acf4ec6f4ac6e2bb76.jpg"
          alt=""
        />
      </figure>
      <div className="">
        <h3 className="text-[1.4rem] font-semibold">Tết này con sẽ về</h3>
        <Link>
          <span className="text-[1.2rem] text-secondary hover:underline hover:text-link-text-hover">
            Bùi Công Nam
          </span>
        </Link>
      </div>
      <div className="absolute inset-0 bg-alpha-bg invisible group:hover/item:visible">
        aaa
      </div>
    </div>
  );
};

CardSong.propTypes = {};

export default CardSong;
