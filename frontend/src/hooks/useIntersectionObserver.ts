import { useEffect, useState } from "react";

export const useIntersectionObserver = <T extends Element | null>(
  reference: React.MutableRefObject<T>
) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleIntersect = (
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver
    ) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entries[0].target);
        observer.disconnect();
      }
    };

    const observer = new IntersectionObserver(handleIntersect);

    if (reference && reference.current) {
      observer.observe(reference.current);
    }

    // If unmounting, then disconnect
    return () => observer.disconnect();
  }, [reference]);

  return isVisible;
};
