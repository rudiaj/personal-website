import { useState, useEffect } from "react";

const isClient = typeof window !== "undefined";

const useIsMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(
    isClient ? window.innerWidth <= breakpoint : false
  );

  useEffect(() => {
    if (!isClient) {
      return;
    }

    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= breakpoint);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isMobile;
};

export default useIsMobile;
