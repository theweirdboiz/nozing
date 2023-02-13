import React from "react";
import PropTypes from "prop-types";

const SkeletonMedia = (props) => {
  return (
    <>
      <div className="flex items-center gap-x-3 mb-3">
        <div className="w-[4rem] h-[4rem] rounded-lg bg-alpha-bg flex-shrink-0"></div>
        <div className="w-full h-full">
          <div className="h-4 rounded-2xl bg-alpha-bg mb-3"></div>
          <div className="h-4 w-1/2 rounded-2xl bg-alpha-bg mb-3"></div>
        </div>
      </div>
    </>
  );
};

SkeletonMedia.propTypes = {};

export default SkeletonMedia;
