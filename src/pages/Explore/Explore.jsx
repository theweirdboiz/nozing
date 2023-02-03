import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Gallary from "../../components/Gallary";

import Chanel from "./components/chanel";
import NewRelease from "./components/newRelease";

import { useDispatch, useSelector } from "react-redux";
import { fetchHomeData } from "@redux/exploreSlice";
import { homeDataSelector } from "@redux/selectors";

const Explore = (props) => {
  const dispatch = useDispatch();
  const { autoTheme1, autoTheme2, top100, album, artistTheme } =
    useSelector(homeDataSelector);

  useEffect(() => {
    // dispatch thunk action
    dispatch(fetchHomeData());
  }, []);

  // ref banner from store

  return (
    <div className="w-full h-full">
      <Gallary />
      <NewRelease />
      <Chanel data={autoTheme1}></Chanel>
      <Chanel data={artistTheme}></Chanel>
      <Chanel data={autoTheme2}></Chanel>
      <Chanel data={top100}></Chanel>
      <Chanel data={album}></Chanel>
    </div>
  );
};

Explore.propTypes = {};

export default Explore;
