import { useEffect, useState, useRef } from "react";

export const useInView = () => {
  const [isInView, setIsInView] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0,
        rootMargin: "0px", // You can adjust this if you want to trigger before element is actually in view
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return { isInView, elementRef };
};
