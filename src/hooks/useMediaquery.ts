"use client";
import { useEffect, useState } from "react";

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false); // always false initially

  useEffect(() => {
    const media = window.matchMedia(query);

    function handleMatch() {
      setMatches(media.matches);
    }

    handleMatch();

    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
};

export default useMediaQuery;
