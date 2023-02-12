import React from "react";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import GallaryItem from "./GallaryItem";
import songsSlice from "@redux/songsSlice";
import { bannerSelector } from "@redux/selectors";

import { useNavigate } from "react-router-dom";

const Gallary = () => {
  // define
  const dispatch = useDispatch();
  const banner = useSelector(bannerSelector);

  const number = 1;
  const navigator = useNavigate();
  // hooks
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
    // 1 2 3 4 5 6
    const firstItem = [...gallaryClassList].slice(0, number);

    const newGallaryClassList = [...gallaryClassList].slice(firstItem.length);

    newGallaryClassList.push(...firstItem);

    setgallaryClassList(newGallaryClassList);
  };

  const rotateRight = () => {
    // 1,2,3,4,5,6
    const newGallaryClassList = [...gallaryClassList].slice(
      0,
      gallaryClassList.length - number
    );
    const lastItem = [...gallaryClassList].slice(
      newGallaryClassList.length + 1 - number
    );
    newGallaryClassList.unshift(...lastItem);
    setgallaryClassList(newGallaryClassList);
  };
  // hooks
  useEffect(() => {
    const gallaryContainer = document.querySelector(".gallary__container");
    const timer = setInterval(() => {
      if (!gallaryContainer.matches(":hover")) {
        rotateRight();
        // rotateLeft();
      }
    }, 2800);
    return () => clearInterval(timer);
  }, [gallaryClassList]);

  const handleClickPrevBtn = () => {
    rotateLeft();
  };
  const handleClickNextBtn = () => {
    rotateRight();
  };
  const handleClickBanner = (item) => {
    if (item.type === 1) {
      dispatch(songsSlice.actions.setCurrentSongId(item.encodeId));
      dispatch(songsSlice.actions.isPlaying(true));
    }
    if (item.type === 4) {
      let link = item.link;
      const path = link.slice(0, link.indexOf("."));
      navigator(path);
    } else {
      dispatch(songsSlice.actions.setIsList(false));
    }
  };
  return (
    <div className="gallary px-[6rem] mt-[7rem] pt-[2rem] ">
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
        {banner?.map((item, index) => {
          return (
            <GallaryItem
              item={item}
              classList={gallaryClassList[index]}
              key={item.encodeId}
              handleClickBanner={handleClickBanner}
            />
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

export default Gallary;
