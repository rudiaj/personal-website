"use client";

import { motion, useTransform, easeInOut, MotionValue } from "framer-motion";
import { ReactNode } from "react";

interface ScrollFadeWrapperProps {
  children: ReactNode;
  scrollY: MotionValue<number>;
}

export const ButtonFadeIn = ({ children, scrollY }: ScrollFadeWrapperProps) => {
  const opacity = useTransform(scrollY, [100, 150], [0, 1], {
    ease: easeInOut,
  });

  const y = useTransform(scrollY, [100, 150], [-15, 0], {
    ease: easeInOut,
  });

  return (
    <motion.div
      className="absolute right-0"
      style={{
        y,
        opacity,
      }}
    >
      {children}
    </motion.div>
  );
};
