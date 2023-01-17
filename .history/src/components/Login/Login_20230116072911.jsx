import React from "react";
import PropTypes from "prop-types";

const Login = (props) => {
  return (
    <div className="my-[1rem] bg-purple-primary rounded-[8px] px-[8px] py-[1.5rem]">
      <p className="text-[1.2rem] font-semibold text-center">
        Đăng nhập để khám phá playlist dành riêng cho bạn
      </p>
      <button className="border rounded-3xl text-center">Đăng nhập</button>
    </div>
  );
};

Login.propTypes = {};

export default Login;
