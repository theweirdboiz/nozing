import React from "react";
import PropTypes from "prop-types";

const Login = (props) => {
  return (
    <div className="my-[1rem] bg-purple-primary rounded-[8px]">
      <p className="">Đăng nhập để khám phá playlist dành riêng cho bạn</p>
      <button className="border rounded-3xl">Đăng nhập</button>
    </div>
  );
};

Login.propTypes = {};

export default Login;
