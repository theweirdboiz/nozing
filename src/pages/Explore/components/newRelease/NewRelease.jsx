import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { homeDataSelector } from "@redux/selectors";

import SongItem from "../songItem";

const NewRelease = (props) => {
  const { newRelease } = useSelector(homeDataSelector);

  const formatReleaseDate = () => {};

  return (
    <div className="mt-[4.8rem]">
      <h3 className="mb-[2rem] text-[2rem] font-bold">{newRelease?.title}</h3>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-x-4 uppercase text-[1.2rem] font-medium mb-[1.6rem]">
          <div className="bg-purple-primary rounded-3xl border border-alpha-bg px-[2.4rem] py-1">
            Tất cả
          </div>
          <div className=" rounded-3xl border border-alpha-bg px-[2.4rem] py-1">
            Việt Nam
          </div>
          <div className=" rounded-3xl border border-alpha-bg px-[2.4rem] py-1">
            Quốc tế
          </div>
        </div>
        <div className="flex items-center gap-x-2">
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
        </div>
      </div>
      <div className="grid grid-cols-3">
        {newRelease?.items?.all?.map((item) => {
          return <SongItem key={item?.encodeId} item={item} />;
        })}
      </div>
    </div>
  );
};

NewRelease.propTypes = {};

export default NewRelease;
