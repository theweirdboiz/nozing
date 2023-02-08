import React, { memo } from "react";
import Album from "@pages/Explore/components/album";

const Chanel = ({ data }) => {
  return (
    <div className="mt-[4.8rem]">
      <h3 className="mb-[2rem] text-[2rem] font-bold">{data?.title}</h3>
      <div className="grid grid-cols-5 gap-x-[2.8rem]">
        {data?.items?.slice(0, 5)?.map((item) => {
          return (
            <Album
              key={item?.encodeId}
              sectionId={item?.sectionId}
              encodeId={item?.encodeId}
              thumbnail={item?.thumbnail}
              title={item?.title}
              artists={item?.artists}
              sortDescription={item?.sortDescription}
              link={item?.link}
            />
          );
        })}
      </div>
    </div>
  );
};

Chanel.propTypes = {};

export default memo(Chanel);
