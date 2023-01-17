import React from "react";

import Brand from "@components/Brand";
import Navbar from "@layouts/components/Sidebar/components/Navbar";

const Sidebar = () => {
  const navbar1 = [
    {
      icon: <></>,
      name: "Cá Nhân",
    },
    {
      icon: <></>,
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
        <div className="border-t-[1px] border-[#dadada]"></div>
        <Navbar navbarList={navbar1} />
      </div>
    </section>
  );
};

export default Sidebar;
