import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Gallary from "../../components/Gallary";

import Chanel from "./components/chanel/Chanel";

import { useDispatch, useSelector } from "react-redux";
import { fetchHomeData } from "@redux/exploreSlice";

const Explore = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch thunk action
    dispatch(fetchHomeData());
  }, []);

  // ref banner from store

  return (
    <div className="w-full h-full">
      <Gallary />
      <Chanel></Chanel>
    </div>
  );
};

Explore.propTypes = {};

export default Explore;
