import React, { memo } from "react";
import PropTypes, { object } from "prop-types";
import { Chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { useState } from "react";
import { useSelector } from "react-redux";
import { homeDataSelector } from "@redux/selectors";
import { useEffect } from "react";

import SongItem from "../songItem";
import { useRef } from "react";

import _ from "lodash";
const ChartSection = (props) => {
  // define
  const [dataChart, setDataChart] = useState(null);

  const { chart, rank } = useSelector(homeDataSelector);

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

  // set chart
  useEffect(() => {
    const items = chart?.items;
    const datasets = [];
    const labels = chart?.times
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
  }, [chart]);

  const handlePercent = (score) => {
    return Math.round(score * 100).toFixed(0);
  };
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
      <div className="flex items-center gap-x-6 relative">
        <div className="w-2/5 flex-shrink-0">
          <div className="grid grid-cols-1 gap-y-4">
            {rank?.slice(0, 3).map((item, index) => {
              return (
                <SongItem
                  key={item?.encodeId}
                  songId={item?.encodeId}
                  title={item?.title}
                  thumbnail={item?.thumbnail}
                  artists={item?.artists}
                  order={index + 1}
                  percent={handlePercent(item?.score / chart?.totalScore)}
                  bgColor="hsla(0,0%,100%,.07)"
                />
              );
            })}
          </div>
          <div className="text-center mt-6">
            <div className="inline-block border rounded-full px-[2rem] py-[4px] cursor-pointer hover:bg-alpha-bg">
              Xem thêm
            </div>
          </div>
        </div>
        <div className="flex-1 h-[30rem] py-3 relative">
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
                rank?.find((item) => item?.encodeId === hoverItemId)?.title
              }
              thumbnail={
                rank?.find((item) => item?.encodeId === hoverItemId)?.thumbnail
              }
              artists={
                rank?.find((item) => item?.encodeId === hoverItemId)?.artists
              }
              percent={handlePercent(
                rank?.find((item) => item?.encodeId === hoverItemId)?.score /
                  chart?.totalScore
              )}
              bgColor={tooltip.bgColor}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

ChartSection.propTypes = {};

export default memo(ChartSection);
