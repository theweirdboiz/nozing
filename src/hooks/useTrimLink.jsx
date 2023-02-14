import React, { useEffect, useState } from "react";

const useTrimLink = (url) => {
  const [link, setLink] = useState("");

  useEffect(() => {
    setLink(url.slice(0, url.indexOf(".")));
  }, [url]);

  return [link];
};

export default useTrimLink;
