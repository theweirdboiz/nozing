import React from "react";
import PropTypes from "prop-types";

const Login = (props) => {
  return (
    <div className="bg-purple-primary container-login-vip">
      <p className="text-[1.2rem] font-semibold mb-5">
        Đăng nhập để khám phá playlist dành riêng cho bạn
      </p>
      <div className="inline-block uppercase font-semibold text-[12px] p-1 rounded-[99rem] border py-[4px] px-[34px] cursor-pointer">
        Đăng nhập
      </div>
    </div>
  );
};

Login.propTypes = {};

export default Login;
