import React from "react";
import PropTypes from "prop-types";
import { useEffect } from "react";

const Gallary = ({ banner }) => {
  const type = (index) => {
    let result = "";
    switch (index) {
      case 1:
        result = "gallary__item--selected";
        break;
      case 2:
        result = "gallary__item--next";
        break;
      case 3:
        result = "gallary__item--last";
        break;
      case 4:
        result = "gallary__item--add";
        break;
      case 5:
        result = "gallary__item--first";
        break;
      case 0:
        result = "gallary__item--previous";
        break;
      default:
        break;
    }
    return result;
  };
  // handle events
  const rotateLeft = (number) => {
    console.log("before", banner);
    const firstItem = [...banner].pop();
    const newBanner = [...banner].slice(number).push(firstItem);
    banner = newBanner;
    console.log("after", banner);
  };
  useEffect(() => {
    rotateLeft(1);
  });
  const rotateRight = () => {};
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
        {banner.map((item, index) => {
          return (
            <div className={`gallary__item ${type(index)}`} key={item.encodeId}>
              <a href={item.link}>
                <figure className="gallary__img">
                  <img src={item.banner} alt="" />
                </figure>
              </a>
            </div>
          );
        })}
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
        </div>
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
