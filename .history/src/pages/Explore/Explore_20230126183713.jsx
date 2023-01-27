import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Gallary from "../../components/Gallary";

import Chanel from "./components/chanel/Chanel";

import { useDispatch, useSelector } from "react-redux";
import { fetchHomeData } from "@redux/exploreSlice";
import { bannerSelector } from "@redux/selectors";

const Explore = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch thunk action
    dispatch(fetchHomeData());
  }, []);
  // ref banner from store
  const banner = useSelector(bannerSelector);
  return (
    <div className="w-full h-full">
      <Gallary banner={banner}></Gallary>
      <Chanel></Chanel>
    </div>
  );
};

Explore.propTypes = {};

export default Explore;
