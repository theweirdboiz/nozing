import React from "react";
import PropTypes from "prop-types";
import Gallary from "../../components/Gallary";

import Chanel from "./components/chanel/Chanel";

const Explore = (props) => {
  return (
    <div className="w-full h-full">
      <Gallary></Gallary>
      <Chanel></Chanel>
    </div>
  );
};

Explore.propTypes = {};

export default Explore;
