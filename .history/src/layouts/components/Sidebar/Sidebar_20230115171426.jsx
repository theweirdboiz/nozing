import React from "react";

import Brand from "@components/Brand";

const Sidebar = () => {
  return (
    <section className="absolute left-0 top-0 sidebar">
      <div className="">
        <Brand />
      </div>
    </section>
  );
};

export default Sidebar;
