import { useCallback, useEffect, useRef } from "react";

export const useInterval = (callback: Function, delay?: number | null) => {
  const savedCallback = useRef<Function>(() => {});
  const intervalIdRef = useRef<NodeJS.Timer>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay !== null) {
      intervalIdRef.current = setInterval(
        () => savedCallback.current(),
        delay || 0
      );

      const id = intervalIdRef.current;
      return () => {
        if (id) clearInterval(id);
      };
    }

    return undefined;
  }, [delay]);

  useEffect(() => {
    const id = intervalIdRef.current;
    return () => {
      if (id) clearInterval(id);
    };
  }, []);

  const resetInterval = useCallback(() => {
    if (intervalIdRef.current && savedCallback.current && delay) {
      clearInterval(intervalIdRef.current);
      intervalIdRef.current = setInterval(() => savedCallback.current(), delay);
    }
  }, [delay]);

  return resetInterval;
};
