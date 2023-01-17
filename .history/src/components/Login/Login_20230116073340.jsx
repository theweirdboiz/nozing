import React from "react";
import PropTypes from "prop-types";

const Login = (props) => {
  return (
    <div className="my-[1rem] bg-purple-primary rounded-[8px] px-[8px] py-[1.5rem] text-center">
      <p className="text-[1.2rem] font-semibold mb-3">
        Đăng nhập để khám phá playlist dành riêng cho bạn
      </p>
      <div className="inline-block uppercase font-semibold text-[12px] p-1 rounded-lg">
        Đăng nhập
      </div>
    </div>
  );
};

Login.propTypes = {};

export default Login;
