import React from "react";
import PropTypes from "prop-types";
import { useEffect } from "react";

const Gallary = ({ banner }) => {
  // handle events
  const rotateLeft = (array, number) => {
    const firstItem = [...array].find((item, index) => index == number);
    const newGallaryClassList = [...array].slice(number);
    newGallaryClassList.push(firstItem);
    array = newGallaryClassList;
  };
  useEffect(() => {
    let gallaryClassList = [
      "gallary__item gallary__item--add",
      "gallary__item gallary__item--first",
      "gallary__item gallary__item--previous",
      "gallary__item gallary__item--selected",
      "gallary__item gallary__item--next",
      "gallary__item gallary__item--last",
    ];
    const gallaryItems = Array.from(
      document.querySelectorAll(".gallary__item")
    );
    const timer = setInterval(() => {
      rotateLeft(gallaryClassList, 1);
      gallaryItems.forEach((item, index) => {
        item.setAttribute("class", gallaryClassList[index]);
      });
    }, 1500);
    return () => clearInterval(timer);
  }, []);
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
        {banner.map((item) => {
          return (
            <div className="gallary__item" key={item.encodeId}>
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
