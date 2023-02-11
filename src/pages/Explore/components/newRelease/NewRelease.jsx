import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { homeDataSelector } from "@redux/selectors";

import SongItem from "../songItem";
import { useState } from "react";
import { useEffect } from "react";

const NewRelease = (props) => {
  const { newRelease } = useSelector(homeDataSelector);

  const [tabActiveIndex, setTabActiveIndex] = useState(0);
  const [tabPanel, setTabPanel] = useState([]);

  const handleTabActiveIndex = (index) => {
    tabActiveIndex !== index && setTabActiveIndex(index);
  };
  useEffect(() => {
    const result =
      tabActiveIndex === 0
        ? newRelease?.items?.all
        : tabActiveIndex === 1
        ? newRelease?.items?.vPop
        : newRelease?.items?.others;
    setTabPanel(result);
  }, [tabActiveIndex, newRelease]);
  return (
    <div className="mt-[4.8rem]  px-[6rem]">
      <h3 className="mb-[2rem] text-[2rem] font-bold">{newRelease?.title}</h3>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-x-4 uppercase text-[1.2rem] font-medium mb-[1.6rem]">
          <div
            onClick={() => handleTabActiveIndex(0)}
            className={`${
              tabActiveIndex === 0 && "bg-purple-primary"
            } rounded-3xl border border-alpha-bg px-[2.4rem] py-1 cursor-pointer`}
          >
            Tất cả
          </div>
          <div
            onClick={() => handleTabActiveIndex(1)}
            className={`${
              tabActiveIndex === 1 && "bg-purple-primary"
            } rounded-3xl border border-alpha-bg px-[2.4rem] py-1 cursor-pointer`}
          >
            Việt Nam
          </div>
          <div
            onClick={() => handleTabActiveIndex(2)}
            className={`${
              tabActiveIndex === 2 && "bg-purple-primary"
            } rounded-3xl border border-alpha-bg px-[2.4rem] py-1 cursor-pointer`}
          >
            Quốc tế
          </div>
        </div>
        <button className="flex items-center gap-x-2 text-secondary hover:text-link-text-hover uppercase font-semibold text-[1.2rem]">
          <span>Tất cả</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-8">
        {tabPanel?.map((item) => {
          return (
            <SongItem
              key={item?.encodeId}
              songId={item?.encodeId}
              title={item?.title}
              thumbnail={item?.thumbnail}
              artists={item?.artists}
              releaseDate={item?.releaseDate}
            />
          );
        })}
      </div>
    </div>
  );
};

NewRelease.propTypes = {};

export default NewRelease;
