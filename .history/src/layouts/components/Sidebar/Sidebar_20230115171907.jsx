import React from "react";

import Brand from "@components/Brand";
import Navbar from "@layouts/components/Sidebar/components/Navbar";

const Sidebar = () => {
  return (
    <section className="absolute left-0 top-0 sidebar">
      <div className="">
        <Brand />
        <Navbar />
      </div>
    </section>
  );
};

export default Sidebar;
