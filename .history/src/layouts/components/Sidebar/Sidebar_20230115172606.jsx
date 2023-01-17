import React from "react";

import Brand from "@components/Brand";
import Navbar from "@layouts/components/Sidebar/components/Navbar";

const Sidebar = () => {
  return (
    <section className="relative left-0 top-0 sidebar bg-sidebar-bg">
      <div className="">
        <Brand />
        <Navbar />
        <Navbar />
      </div>
    </section>
  );
};

export default Sidebar;
