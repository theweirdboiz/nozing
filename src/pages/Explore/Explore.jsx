import React, { useEffect } from "react";
import Gallary from "../../components/Gallary";

import Chanel from "./components/chanel";
import NewRelease from "./components/newRelease";
import ChartSection from "./components/chart/ChartSection";

import { useDispatch, useSelector } from "react-redux";
import { fetchHomeData } from "@redux/exploreSlice";
import { homeDataSelector } from "@redux/selectors";
import { Link } from "react-router-dom";

const Explore = () => {
  // define
  const dispatch = useDispatch();
  const { autoTheme1, autoTheme2, top100, album, artistTheme, weekChart } =
    useSelector(homeDataSelector);

  // helper
  const trimLink = (link) => {
    return link.slice(0, link.indexOf("."));
  };
  // hooks
  useEffect(() => {
    dispatch(fetchHomeData());
    console.log("fetch home data");
  }, []);

  return (
    <div className="w-full h-full ">
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
