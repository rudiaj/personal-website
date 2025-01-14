"use client";

import { motion, useTransform, easeInOut, MotionValue } from "framer-motion";
import { ReactNode, useRef } from "react";

interface ScrollFadeWrapperProps {
  height: number;
  children: ReactNode;
  scrollY: MotionValue<number>;
}

export const ScrollFadeWrapper = ({
  height,
  children,
  scrollY,
}: ScrollFadeWrapperProps) => {
  const memoedHeight = useRef(height);
  const opacity = useTransform(scrollY, [0, 80], [1, 0], { ease: easeInOut });

  const bioScale = useTransform(scrollY, [0, 200], [1, 0.25], {
    ease: easeInOut,
  });

  const bioY = useTransform(scrollY, [0, 200], [0, -100], {
    ease: easeInOut,
  });

  const bioHeight = useTransform(scrollY, [0, 100], [memoedHeight.current, 0], {
    ease: easeInOut,
  });

  return (
    <motion.div
      className="flex flex-col overflow-hidden bg-white"
      style={{
        opacity: opacity,
        y: bioY,
        height: bioHeight,
        scale: bioScale,
        transformOrigin: "left",
      }}
    >
      {children}
    </motion.div>
  );
};
