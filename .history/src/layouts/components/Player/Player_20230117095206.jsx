import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Player = () => {
  return (
    <section className="fixed bottom-0 left-0 right-0 px-[2rem] border border-border-primary">
      <div className="flex h-[9rem] py-5">
        <div className="flex justify-start items-center gap-x-5">
          <Link>
            <figure className="w-[6.4rem] h-[6.4rem] rounded-md overflow-hidden">
              <img
                src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/7/4/2/a/742adf703cc6b4acf4ec6f4ac6e2bb76.jpg"
                alt=""
              />
            </figure>
          </Link>
          <div className="flex">
            <h3 className="text-[1.4rem] font-semibold">Tết này con sẽ về</h3>
            <span className="text-[1.2rem] text-secondary">Bùi Công Nam</span>
          </div>
          <span>icon1</span>
          <span>icon2</span>
        </div>
      </div>
      <div className=""></div>
      <div className=""></div>
    </section>
  );
};

Player.propTypes = {};

export default Player;
