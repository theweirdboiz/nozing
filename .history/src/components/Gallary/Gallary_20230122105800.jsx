import React from "react";
import PropTypes from "prop-types";

const Gallary = ({ banner }) => {
  return (
    <div className="gallary">
      <div className="gallary__container h-[22rem]">
        <div className="gallary__prev">
          <button className="btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
        </div>
        {banner.map((item) => {
          return <img src={item.banner} alt="" />;
        })}
        {/* <div className="gallary__item gallary__item--previous">
          <a href="">
            <figure className="gallary__img">
              <img
                src="https://photo-zmp3.zmdcdn.me/banner/4/d/1/7/4d179650bad82f76ac45b9c74c0517cb.jpg"
                alt=""
              />
            </figure>
          </a>
        </div>
        <div className="gallary__item gallary__item--selected">
          <a href="">
            <figure className="gallary__img">
              <img
                src="https://photo-zmp3.zmdcdn.me/banner/1/c/6/9/1c69dfe42443d46e21adadb16b10acd0.jpg"
                alt=""
              />
            </figure>
          </a>
        </div>
        <div className="gallary__item gallary__item--next">
          <a href="">
            <figure className="gallary__img">
              <img
                src="https://photo-zmp3.zmdcdn.me/banner/5/1/e/4/51e432759c68ef1ce4c0de8aebc487a9.jpg"
                alt=""
              />
            </figure>
          </a>
        </div>
        <div className="gallary__item gallary__item--last">
          <a href="">
            <figure className="gallary__img">
              <img
                src="https://photo-zmp3.zmdcdn.me/banner/3/4/2/3/3423e1faf0e9b54a0caeefe555660e04.jpg"
                alt=""
              />
            </figure>
          </a>
        </div>
        <div className="gallary__item gallary__item--add">
          <a href="">
            <figure className="gallary__img">
              <img
                src="https://photo-zmp3.zmdcdn.me/banner/8/3/d/2/83d278a2da954cd49ae642afaa8e621b.jpg"
                alt=""
              />
            </figure>
          </a>
        </div>
        <div className="gallary__item gallary__item--first">
          <a href="">
            <figure className="gallary__img">
              <img
                src="https://photo-zmp3.zmdcdn.me/banner/d/7/2/8/d728fee85b4ffb7d961209d986b3e7c5.jpg"
                alt=""
              />
            </figure>
          </a>
        </div>
        <div className="gallary__next">
          <button className="btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
          <div></div>
        </div> */}
      </div>
    </div>
  );
};

Gallary.propTypes = {
  banner: PropTypes.array,
};

Gallary.defaultProps = {
  banner: [],
};

export default Gallary;
