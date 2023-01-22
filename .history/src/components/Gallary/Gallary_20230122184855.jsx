import React from "react";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { useState } from "react";

const Gallary = ({ banner }) => {
  const number = 1;
  const [gallaryClassList, setgallaryClassList] = useState([
    "gallary__item gallary__item--add",
    "gallary__item gallary__item--first",
    "gallary__item gallary__item--previous",
    "gallary__item gallary__item--selected",
    "gallary__item gallary__item--next",
    "gallary__item gallary__item--last",
  ]);
  // handle events
  const rotateLeft = () => {
    const firstItem = [...gallaryClassList].find(
      (item, index) => index == number
    );
    const newGallaryClassList = [...gallaryClassList].slice(number);
    newGallaryClassList.push(firstItem);
    setgallaryClassList(newGallaryClassList);
  };
  useEffect(() => {
    console.log(`1`);
    const gallaryContainer = document.querySelector(".gallary__container");
    const timer = setInterval(() => {
      if (!gallaryContainer.matches(":hover")) {
        rotateRight();
      }
    }, 3000);
    return () => clearInterval(timer);
  }, [gallaryClassList, setgallaryClassList]);

  const rotateRight = () => {
    // 1,2,3,4,5,6
    const newGallaryClassList = [...gallaryClassList].slice(
      number,
      gallaryClassList.length
    );
    const lastItem = [...gallaryClassList].slice(0, newGallaryClassList.length);
    setgallaryClassList([...newGallaryClassList, ...lastItem]);
  };
  const handleClickPrevBtn = () => {
    rotateLeft();
  };
  const handleClickNextBtn = () => {
    rotateRight();
  };

  return (
    <div className="gallary">
      <div className="gallary__container h-[22rem]">
        <div className="gallary__prev" onClick={handleClickPrevBtn}>
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
            <div className={gallaryClassList[index]} key={item.encodeId}>
              <a href={item.link}>
                <figure className="gallary__img">
                  <img src={item.banner} alt="" />
                </figure>
              </a>
            </div>
          );
        })}
        <div className="gallary__next" onClick={handleClickNextBtn}>
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
