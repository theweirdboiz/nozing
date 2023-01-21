import React from "react";

import Brand from "@components/Brand";
import Navbar from "@layouts/components/Sidebar/components/Navbar";

const Sidebar = () => {
  const navbar1 = [
    {
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="mar-r-10"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.41666 2.29166C5.07148 2.29166 4.79166 2.57148 4.79166 2.91666C4.79166 3.26183 5.07148 3.54166 5.41666 3.54166H14.5833C14.9285 3.54166 15.2083 3.26183 15.2083 2.91666C15.2083 2.57148 14.9285 2.29166 14.5833 2.29166H5.41666ZM2.5 8.33333C2.5 6.60744 3.89911 5.20833 5.625 5.20833H14.375C16.1009 5.20833 17.5 6.60744 17.5 8.33333V14.1667C17.5 15.8925 16.1009 17.2917 14.375 17.2917H5.625C3.89911 17.2917 2.5 15.8925 2.5 14.1667V8.33333ZM5.625 6.45833C4.58947 6.45833 3.75 7.29779 3.75 8.33333V14.1667C3.75 15.2022 4.58946 16.0417 5.625 16.0417H14.375C15.4105 16.0417 16.25 15.2022 16.25 14.1667V8.33333C16.25 7.29779 15.4105 6.45833 14.375 6.45833H5.625ZM12.5 7.3C11.3494 7.3 10.4166 8.23274 10.4166 9.38333V10.8832C10.1041 10.7235 9.75006 10.6333 9.37496 10.6333C8.10931 10.6333 7.0833 11.6594 7.0833 12.925C7.0833 14.1907 8.10931 15.2167 9.37496 15.2167C10.5759 15.2167 11.561 14.293 11.6587 13.1173C11.6639 13.0847 11.6666 13.0513 11.6666 13.0173V9.38333C11.6666 8.92309 12.0397 8.55 12.5 8.55H13.2291C13.5743 8.55 13.8541 8.27018 13.8541 7.925C13.8541 7.57982 13.5743 7.3 13.2291 7.3H12.5ZM8.3333 12.925C8.3333 12.3497 8.79967 11.8833 9.37496 11.8833C9.95026 11.8833 10.4166 12.3497 10.4166 12.925C10.4166 13.5003 9.95026 13.9667 9.37496 13.9667C8.79967 13.9667 8.3333 13.5003 8.3333 12.925Z"
          ></path>
        </svg>
      ),
      name: "Cá Nhân",
    },
    {
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="mar-r-10"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.70831 9.99998C2.70831 5.9729 5.9729 2.70831 9.99997 2.70831C14.027 2.70831 17.2916 5.9729 17.2916 9.99998C17.2916 14.0271 14.027 17.2916 9.99997 17.2916C5.9729 17.2916 2.70831 14.0271 2.70831 9.99998ZM9.99997 1.45832C5.28254 1.45832 1.45831 5.28255 1.45831 9.99998C1.45831 14.7174 5.28254 18.5416 9.99997 18.5416C14.7174 18.5416 18.5416 14.7174 18.5416 9.99998C18.5416 5.28255 14.7174 1.45832 9.99997 1.45832ZM7.70832 9.99999C7.70832 8.73433 8.73433 7.70832 9.99998 7.70832C11.2656 7.70832 12.2916 8.73433 12.2916 9.99999C12.2916 11.2656 11.2656 12.2917 9.99998 12.2917C8.73433 12.2917 7.70832 11.2656 7.70832 9.99999ZM9.99998 6.45832C8.04397 6.45832 6.45832 8.04398 6.45832 9.99999C6.45832 11.956 8.04397 13.5417 9.99998 13.5417C11.956 13.5417 13.5416 11.956 13.5416 9.99999C13.5416 8.04398 11.956 6.45832 9.99998 6.45832Z"
          ></path>
        </svg>
      ),
      name: "Khám Phá",
    },
    {
      icon: <></>,
      name: "#zingchart",
    },
    {
      icon: <></>,
      name: "Radio",
      imageLink: "",
    },
    {
      icon: <></>,
      name: "Theo dõi",
    },
  ];
  return (
    <section className="fixed left-0 top-0 sidebar bg-sidebar-bg">
      <div className="px-[2.5rem]">
        <Brand />
        <Navbar navbarList={navbar1} />
        <div className="divide"></div>
        <Navbar navbarList={navbar1} />
      </div>
    </section>
  );
};

export default Sidebar;