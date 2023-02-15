import React, { memo } from "react";
import PropTypes from "prop-types";

const LoginVipContainer = ({ container }) => {
  const { text, buttonText, buttonBgColor, buttonColor, bgColor, isVip } =
    container;
  return (
    <div className={`hidden md:block ${bgColor} container-login-vip`}>
      <p className="text-[1.2rem] font-semibold mb-5">{text}</p>
      <div
        className={`inline-block uppercase font-semibold text-[12px] p-1 rounded-[99rem] py-[4px] px-[34px] cursor-pointer border ${buttonBgColor} ${buttonColor} ${
          isVip && "border-vip"
        }`}
      >
        {buttonText}
      </div>
    </div>
  );
};

LoginVipContainer.propTypes = {
  container: PropTypes.object.isRequired,
};

export default memo(LoginVipContainer);
