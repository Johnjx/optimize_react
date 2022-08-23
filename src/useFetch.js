import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [emojis, setEmojis] = useState({ data: [], loading: true });

  useEffect(() => {
    fetch(url)
      .then((data) => data.json())
      .then((newData) => {
        setEmojis({ data: newData });
      });
  }, [url, setEmojis]);
  return emojis;
};
