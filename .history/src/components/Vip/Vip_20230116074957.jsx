import React from "react";
import PropTypes from "prop-types";

const Vip = (props) => {
  return (
    <div className="container-login-vip bg-vip">
      <p className="text-[1.2rem] font-semibold mb-5">
        Nghe nhạc không quảng cáo cùng kho nhạc VIP
      </p>
      <div className="inline-block uppercase font-semibold text-[12px] p-1 rounded-[99rem] border py-[4px] px-[34px] cursor-pointer bg-[#ffdb00] text-[#000] border-[current]">
        Nâng cấp Vip
      </div>
    </div>
  );
};

Vip.propTypes = {};

export default Vip;
