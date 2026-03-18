"use client";
import { useEffect, useState } from "react";

const useIncrementCount = (limit: number) => {
  const [currentCount, setCurrentCount] = useState(0);

  const countInterval = limit > 1000 ? 0.001 : limit > 100 ? 10 : 100;
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (currentCount < limit) {
      interval = setInterval(() => {
        setCurrentCount((prev) => prev + 1);
      }, countInterval);
    }

    return () => clearInterval(interval);
  }, [currentCount, limit, countInterval]);

  return currentCount;
};

export default useIncrementCount;
