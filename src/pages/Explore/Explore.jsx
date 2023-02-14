import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { fetchHomeData } from "@redux/exploreSlice";
import { homeDataSelector } from "@redux/selectors";

import Gallary from "@components/Gallary";
import Chanel from "./components/chanel";
import NewRelease from "./components/newRelease";
import ChartSection from "./components/chart/ChartSection";

import { trimLink } from "@helpers/helpers";

const Explore = () => {
  // define
  const dispatch = useDispatch();
  const { autoTheme1, autoTheme2, top100, album, artistTheme, weekChart } =
    useSelector(homeDataSelector);

  // hooks
  useEffect(() => {
    dispatch(fetchHomeData());
  }, []);

  return (
    <div className="w-full h-full">
      <Gallary />
      <NewRelease />
      <Chanel data={autoTheme1}></Chanel>
      <Chanel data={artistTheme}></Chanel>
      <Chanel data={autoTheme2}></Chanel>
      {/* chart */}
      <ChartSection />
      {/* week chart */}
      <div className="grid grid-cols-3 gap-x-12 mt-[2.8rem] px-[6rem]">
        {weekChart?.map((item) => {
          return (
            <Link
              key={item?.banner}
              to={trimLink(item?.link)}
              className="rounded-lg overflow-hidden"
            >
              <img src={item?.cover} alt="" />
            </Link>
          );
        })}
      </div>
      <Chanel data={top100}></Chanel>
      <Chanel data={album}></Chanel>
    </div>
  );
};

export default Explore;
