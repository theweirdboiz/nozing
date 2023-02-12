import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { fetchChartHomeData } from "@redux/exploreSlice";
import { chartHomeDataSelector } from "../../redux/selectors";
import _ from "lodash";

import { Line } from "react-chartjs-2";

import SongItem from "@pages/Explore/components/songItem";
import { RoutesConfig } from "@config";
import { Link } from "react-router-dom";

import MediaItem from "@components/MediaItem";
import RankSongs from "./components/RankSongs";

const ZingChart = (props) => {
  const dispatch = useDispatch();
  const chartHomeData = useSelector(chartHomeDataSelector);

  const [dataChart, setDataChart] = useState();

  const chartRef = useRef();

  const [tooltip, setTooltip] = useState({
    opacity: 0,
    top: 0,
    left: 0,
    bgColor: "white",
    pointerEvents: "none",
  });

  const [hoverItemId, setHoverItemId] = useState();

  const options = {
    responsive: true,
    pointRadius: 0,
    maintainAspectRatio: false,
    scales: {
      y: {
        ticks: { display: false },
        grid: {
          color: "hsla(0,0%,100%,0.35)",
        },
        border: {
          dash: [1, 4],
        },
      },
      x: {
        ticks: { color: "hsla(0,0%,100%,0.5)" },
        grid: { color: "transparent" },
      },
    },
    plugins: {
      legend: false,
      tooltip: {
        enabled: false,
        external: (context) => {
          if (!chartRef || !chartRef.current) return;
          const tooltipModel = context.tooltip;
          // set tooltip model hidden when tooltip hidden
          if (tooltipModel.opacity === 0) {
            tooltip.opacity !== 0 &&
              setTooltip((prev) => ({ ...prev, opacity: 0 }));
            return;
          }

          const counter = +tooltipModel.body[0].lines[0].replace(",", "");
          const rs = dataChart.datasets.filter((dataset) =>
            dataset.data.some((item) => item === counter)
          );
          setHoverItemId(rs[0].encodeId);
          console.log(rs[0].borderColor);
          // custom tooltip
          const newTooltipData = {
            opacity: 1,
            left: tooltipModel.caretX,
            top: tooltipModel.caretY,
            bgColor: rs[0].borderColor,
            pointerEvents: "none",
          };
          if (!_.isEqual(tooltip, newTooltipData)) {
            setTooltip(newTooltipData);
          }
        },
      },
    },
    hover: {
      mode: "dataset",
      intersect: false,
    },
  };

  const [isMore, setIsMore] = useState(false);

  const [listSong, setListSong] = useState();

  useEffect(() => {
    dispatch(fetchChartHomeData());
  }, []);

  useEffect(() => {
    const items = chartHomeData?.RTChart?.chart?.items;
    const datasets = [];
    const labels = chartHomeData?.RTChart?.chart?.times
      ?.filter((time) => +time?.hour % 2 === 0)
      ?.map((time) => time.hour + ":00");
    if (items) {
      for (let index = 0; index < 3; index++) {
        datasets.push({
          data: items[Object.keys(items)[index]]
            ?.filter((item) => +item?.hour % 2 === 0)
            ?.map((time) => time.counter),
          encodeId: Object.keys(items)[index],
          borderColor:
            index === 0 ? "#4A90E2" : index === 1 ? "#27BD9C" : "#E35050",
          tension: 0.2,
          borderWidth: 2,
          pointBackgroundColor: "white",
          pointHoverRadius: 6,
          pointHoverBorderWidth: 3,
        });
      }
    }
    setDataChart({ labels, datasets });
  }, [chartHomeData]);

  // useEffect(() => {
  //   if (isMore) {
  //     setListSong(chartHomeData?.RTChart?.items);
  //   } else {
  //     setListSong(chartHomeData?.RTChart?.items?.slice(0, 10));
  //   }
  // }, [isMore, listSong]);
  // handle events
  const handleSeeMore = () => {
    setIsMore((prev) => !prev);
  };
  const handlePercent = (score) => {
    return Math.round(score * 100).toFixed(0);
  };
  const link = RoutesConfig.find((route) => route.id === "zing-chart").id;
  return (
    <div className="pt-[10rem] relative overflow-hidden">
      <div className="mx-[6rem]">
        <div className="absolute inset-0 w-full h-[50rem] bg-chart bg-top bg-cover bg-no-repeat grayscale"></div>
        <div className="absolute inset-0 w-full h-[50rem] bg-alpha bg-top bg-cover bg-no-repeat"></div>
        <div className="absolute inset-0 w-full h-[50rem] bg-alpha1 bg-top bg-cover bg-no-repeat opacity-90"></div>
        {/* <div className="absolute inset-0 z-0 opacity-95 bg-chart-linear"></div> */}
        <Link to={link}>
          <h2 className="mb-[2rem] text-[2.8rem] flex items-center lowercase font-extrabold gap-x-1 relative px-10">
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
        </Link>
        <div className="flex-1 h-[30rem] py-3 relative z-20">
          {dataChart && (
            <Line ref={chartRef} data={dataChart} options={options} />
          )}
          <div
            className={`absolute rounded-lg pointer-events-${tooltip.pointerEvents}`}
            style={{
              top: tooltip.top,
              left: tooltip.left,
              opacity: tooltip.opacity,
            }}
          >
            <SongItem
              songId={hoverItemId}
              title={
                chartHomeData?.RTChart?.items?.find(
                  (item) => item?.encodeId === hoverItemId
                )?.title
              }
              thumbnail={
                chartHomeData?.RTChart?.items?.find(
                  (item) => item?.encodeId === hoverItemId
                )?.thumbnail
              }
              artists={
                chartHomeData?.RTChart?.items?.find(
                  (item) => item?.encodeId === hoverItemId
                )?.artists
              }
              percent={handlePercent(
                chartHomeData?.RTChart?.items?.find(
                  (item) => item?.encodeId === hoverItemId
                )?.score / chartHomeData?.RTChart?.chart?.totalScore
              )}
              bgColor={tooltip.bgColor}
            />
          </div>
        </div>
        {/* <div className="mt-6">
          {listSong?.map((item, index) => {
            return (
              <div key={item?.encodeId} className="flex items-center pl-5">
                <span
                  className={`w-[5%] text-stroke-${
                    index + 1
                  } font-bold text-alpha-bg text-[3.5rem] text-center`}
                >
                  {index + 1}
                </span>
                <div className="w-5 h-1 bg-secondary mx-5"></div>
                <MediaItem
                  songId={item?.encodeId}
                  thumbnail={item?.thumbnail}
                  artists={item?.artists}
                  title={item?.title}
                  albumTitle={item?.album?.title}
                  duration={item?.duration}
                  index={index}
                />
              </div>
            );
          })}
        </div> */}
        <RankSongs
          isRank
          listSong={
            isMore
              ? chartHomeData?.RTChart?.items
              : chartHomeData?.RTChart?.items?.slice(0, 10)
          }
          inPlaylist
        />
      </div>
      <div className="text-center  my-6">
        <div
          className="inline-block px-6 py-2 rounded-full border border-border-primary bg-transparent font-semibold hover:bg-alpha-bg cursor-pointer"
          onClick={handleSeeMore}
        >
          {isMore ? "Xem top 10" : "Xem top 100"}
        </div>
      </div>
      {/*  */}
      <section className="mt-10 mb-4 relative">
        <div className="absolute inset-0 bg-chart-section bg-top bg-cover bg-no-repeat grayscale"></div>
        <div className="absolute inset-0 bg-chart-bg-alpha"></div>
        <div className="relative z-10 p-[6rem]">
          <h3 className="font-bold text-[3.2rem] uppercase mb-3">
            Bảng xếp hạng tuần
          </h3>
          <div className="grid grid-cols-3 gap-x-10">
            {/* vn */}
            <div className="bg-chart-box-alpha rounded-3xl py-6 px-4">
              <div className="">
                <RankSongs
                  listSong={chartHomeData?.weekChart?.vn?.items?.slice(0, 5)}
                  isRank
                />
              </div>
              <div className="text-center mt-8">
                <div
                  className="inline-block px-6 py-2 rounded-full border border-border-primary bg-transparent font-semibold hover:bg-alpha-bg cursor-pointer"
                  onClick={handleSeeMore}
                >
                  Xem tất cả
                </div>
              </div>
            </div>
            <div className="bg-chart-box-alpha rounded-3xl py-6 px-4">
              <div className="">
                <RankSongs
                  listSong={chartHomeData?.weekChart?.us?.items?.slice(0, 5)}
                  isRank
                />
              </div>
              <div className="text-center mt-8">
                <div
                  className="inline-block px-6 py-2 rounded-full border border-border-primary bg-transparent font-semibold hover:bg-alpha-bg cursor-pointer"
                  onClick={handleSeeMore}
                >
                  Xem tất cả
                </div>
              </div>
            </div>
            {/* usuk */}
            <div className="bg-chart-box-alpha rounded-3xl py-6 px-4">
              <div className="">
                <RankSongs
                  listSong={chartHomeData?.weekChart?.korea?.items?.slice(0, 5)}
                  isRank
                />
              </div>
              <div className="text-center mt-8">
                <div
                  className="inline-block px-6 py-2 rounded-full border border-border-primary bg-transparent font-semibold hover:bg-alpha-bg cursor-pointer"
                  onClick={handleSeeMore}
                >
                  Xem tất cả
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

ZingChart.propTypes = {};

export default ZingChart;
