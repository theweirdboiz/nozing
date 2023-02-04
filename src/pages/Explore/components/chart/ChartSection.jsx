import React from "react";
import PropTypes from "prop-types";

const ChartSection = (props) => {
  return (
    <div className="mt-[4.8rem] p-[2rem] overflow-hidden rounded-lg relative">
      <div className="absolute inset-0 w-full h-full bg-chart bg-top bg-cover bg-no-repeat"></div>
      <div className="absolute inset-0 z-0 opacity-95 bg-chart-linear"></div>
      <h2 className="mb-[2rem] text-[2.8rem] flex items-center lowercase font-extrabold gap-x-1 relative">
        <span className=" hover:text-link-text-hover cursor-pointer">
          #Zingchart
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-14 h-14"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
          />
        </svg>
      </h2>
      <div className="flex items-center relative">
        <div className="w-2/5">
          {/* item */}
          <div className="flex items-center py-[1rem] px-[1.5rem] bg-alpha-bg rounded-xl mb-[1rem] hover:op">
            <div className="flex items-center gap-x-6">
              <span className="text-[3.2rem] stroke-1 stroke-vip font-extrabold">
                1
              </span>
              <div className="flex items-center gap-x-4">
                <figure className="rounded-lg w-[6rem] h-[6rem] overflow-hidden">
                  <img
                    src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/4/a/d/4/4ad439b918f3356addb5f237c1380ffc.jpg"
                    alt=""
                  />
                </figure>
                <div className="">
                  <h3 className="font-medium">Em la ke dang iu</h3>
                  <span className="text-[1.2rem] text-secondary">
                    Phat huy h4
                  </span>
                </div>
              </div>
            </div>
            <span className="ml-auto font-bold">50%</span>
          </div>
          <div className="flex items-center py-[1rem] px-[1.5rem] bg-alpha-bg rounded-xl mb-[1rem]">
            <div className="flex items-center gap-x-6">
              <span className="text-[3.2rem] stroke-1 stroke-vip font-extrabold">
                1
              </span>
              <div className="flex items-center gap-x-4">
                <figure className="rounded-lg w-[6rem] h-[6rem] overflow-hidden">
                  <img
                    src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/4/a/d/4/4ad439b918f3356addb5f237c1380ffc.jpg"
                    alt=""
                  />
                </figure>
                <div className="">
                  <h3 className="font-medium">Em la ke dang iu</h3>
                  <span className="text-[1.2rem] text-secondary">
                    Phat huy h4
                  </span>
                </div>
              </div>
            </div>
            <span className="ml-auto font-bold">50%</span>
          </div>
          <div className="flex items-center py-[1rem] px-[1.5rem] bg-alpha-bg rounded-xl mb-[1rem]">
            <div className="flex items-center gap-x-6">
              <span className="text-[3.2rem] stroke-1 stroke-vip font-extrabold">
                1
              </span>
              <div className="flex items-center gap-x-4">
                <figure className="rounded-lg w-[6rem] h-[6rem] overflow-hidden">
                  <img
                    src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/4/a/d/4/4ad439b918f3356addb5f237c1380ffc.jpg"
                    alt=""
                  />
                </figure>
                <div className="">
                  <h3 className="font-medium">Em la ke dang iu</h3>
                  <span className="text-[1.2rem] text-secondary">
                    Phat huy h4
                  </span>
                </div>
              </div>
            </div>
            <span className="ml-auto font-bold">50%</span>
          </div>
          <div className="text-center mt-[5px]">
            <div className="inline-block border rounded-full px-[2rem] py-[4px] cursor-pointer hover:bg-alpha-bg">
              Xem thêm
            </div>
          </div>
        </div>
        <div className="flex-1 bg-vip"></div>
      </div>
    </div>
  );
};

ChartSection.propTypes = {};

export default ChartSection;
