import React from "react";

import Brand from "@components/Brand";
import Navbar from "@layouts/components/Sidebar/components/Navbar";

const Sidebar = () => {
  const navbar1 = [
    {
      a: "123",
    },
  ];
  return (
    <section className="fixed left-0 top-0 sidebar bg-sidebar-bg">
      <div className="px-[2.5rem]">
        <Brand />
        <Navbar navbarList={navbar1} />
        <Navbar navbarList={navbar1} />
      </div>
    </section>
  );
};

export default Sidebar;
