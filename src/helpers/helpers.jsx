export const trimLink = (link) => {
  return link.slice(0, link.indexOf("."));
};

export const formatTime = (totalDuration) => {
  const hour = Math.floor(totalDuration / 3600);
  const minute = Math.floor((totalDuration - hour * 3600) / 60);
  return `${hour} giờ ${minute} phút`;
};
export const prefixFollow = (follow) => {
  if (follow < 1000) {
    return follow;
  }
  if (follow < 1000000) {
    return Math.floor(follow / 1000).toFixed(0) + "K";
  }
  return (follow / 1000000).toFixed(1) + "M";
};
export const prefixTime = (time) => {
  return time > 9 ? time : `0${time}`;
};
export const formatDuration = (t) => {
  const time = Number.parseInt(t);
  const hour = Math.floor(time / 3600);
  const minute = Math.floor((time - hour * 3600) / 60);
  const second = time - (hour * 3600 + minute * 60);
  const hourPrefix = prefixTime(hour);
  const minutePrefix = prefixTime(minute);
  const secondPrefix = prefixTime(second);
  if (hour > 0) {
    return `${hourPrefix}:${minutePrefix}:${secondPrefix}`;
  }
  return `${minutePrefix}:${secondPrefix}`;
};
