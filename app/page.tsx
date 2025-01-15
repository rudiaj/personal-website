"use client";

import Image from "next/image";
import { useScroll, motion, useTransform, easeInOut } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import useMeasure from "react-use-measure";

import { EDUCATION, EXPERIENCE, SKILLS } from "@/constants/data";
import useIsMobile from "@/hooks/useBreakpoint";
import { ScrollFadeWrapper } from "@/components/Bio";
import { BioContent } from "@/components/BioContent";
import { ExperienceItem } from "@/components/ExperienceItem";

const LOGO_HEIGHT = 87.42;
const LOGO_WIDTH = 90;
const LOGO_MARGIN_BOTTOM = 20;

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      ease: "easeOut",
      staggerChildren: 0.25, // Time between animations of each child
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: "easeOut",
      filter: {
        duration: 0.4,
      },
    },
  },
};

export default function Home() {
  const containerRef = useRef(null);
  const isMobile = useIsMobile();
  const [bioPlaceholderRef, { height: bioPlaceholderHeight }] = useMeasure();
  const { scrollY } = useScroll({ container: containerRef });
  const [isMeasured, setIsMeasured] = useState(false);

  const animatedlogoWidth = useTransform(
    scrollY,
    [0, 100],
    [LOGO_WIDTH, LOGO_WIDTH / 2.5],
    {
      ease: easeInOut,
    }
  );

  const animatedLogoHeight = useTransform(
    scrollY,
    [0, 100],
    [LOGO_HEIGHT, LOGO_HEIGHT / 2.5],
    {
      ease: easeInOut,
    }
  );

  const animatedlogoMarginBottom = useTransform(
    scrollY,
    [0, 100],
    [LOGO_MARGIN_BOTTOM, 0],
    {
      ease: easeInOut,
    }
  );

  useEffect(() => {
    if (bioPlaceholderHeight !== 0 && !isMeasured) {
      setIsMeasured(true);
    }
  }, [bioPlaceholderHeight, isMeasured]);

  return (
    <div
      ref={containerRef}
      className="h-dvh overflow-auto scroll-smooth"
      style={{ overflowAnchor: "none" }}
    >
      <motion.main
        className="max-w-[1252px] mx-auto lg:px-[50px] pb-12 pt-8 grid grid-cols-12"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div
          className="col-span-12 md:col-span-4 md:mb-0 mb-10 px-4 lg:px-0 sticky top-0 self-start py-4 md:py-0 w-full before:absolute before:inset-0 before:backdrop-blur-sm before:[mask-image:linear-gradient(to_bottom,white,white,transparent)] bg-gradient-to-b from-white to-transparent before:-z-20 md:top-8 z-20"
          variants={itemVariants}
        >
          <div className="relative flex flex-col">
            <motion.div
              style={{
                width: isMobile ? animatedlogoWidth : LOGO_WIDTH,
                height: isMobile ? animatedLogoHeight : LOGO_HEIGHT,
                marginBottom: isMobile
                  ? animatedlogoMarginBottom
                  : LOGO_MARGIN_BOTTOM,
              }}
              className="relative"
            >
              <Image
                alt="logo"
                src="/logo.svg"
                fill
                className="w-full h-full"
                priority
              />
            </motion.div>

            {isMeasured && isMobile ? (
              <ScrollFadeWrapper
                height={bioPlaceholderHeight}
                scrollY={scrollY}
              >
                <BioContent />
              </ScrollFadeWrapper>
            ) : (
              <div
                className="flex flex-col overflow-hidden bg-white"
                ref={bioPlaceholderRef}
              >
                <BioContent />
              </div>
            )}
          </div>
        </motion.div>
        <motion.div
          className="col-span-12 md:col-span-2 md:mb-0 mb-4 px-4 lg:px-0"
          variants={itemVariants}
        >
          <span className="font-bold text-base tracking-widest uppercase">
            Experience
          </span>
        </motion.div>
        <motion.div
          className="col-span-12 md:col-span-6 flex flex-col gap-6 px-4 lg:px-0 mb-10"
          variants={itemVariants}
        >
          {EXPERIENCE.map((experience, index) => (
            <ExperienceItem key={index} experience={experience} />
          ))}
        </motion.div>
        <div className="col-span-12 md:col-span-8 border-b border-black/10 md:col-start-5 mb-10"></div>
        <motion.div
          className="col-span-12 md:col-span-2 md:mb-0 mb-4 px-4 lg:px-0 md:col-start-5"
          initial="hidden"
          whileInView="visible"
          variants={itemVariants}
        >
          <span className="font-bold text-base tracking-widest uppercase">
            Education
          </span>
        </motion.div>
        <motion.div
          className="col-span-12 md:col-span-6 flex flex-col gap-6 px-4 lg:px-0  mb-10 md:col-start-7"
          variants={itemVariants}
        >
          {EDUCATION.map((edu, index) => (
            <motion.div
              key={index}
              className="flex flex-col"
              initial="hidden"
              whileInView="visible"
              variants={itemVariants}
            >
              <div className="flex flex-col mb-3">
                <span className="font-medium text-sm tracking-wide text-black/60">
                  {edu.date}
                </span>
                <span className="font-bold text-base tracking-wide">
                  {edu.name}
                </span>
                <span className="font-medium text-base tracking-wide italic">
                  {edu.title}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="col-span-12 md:col-span-8 border-b border-black/10 md:col-start-5 mb-10"></div>
        <motion.div
          className="col-span-12 md:col-span-2 md:mb-0 mb-4 px-4 lg:px-0 md:col-start-5"
          initial="hidden"
          whileInView="visible"
          variants={itemVariants}
        >
          <span className="font-bold text-base tracking-widest uppercase">
            Skills
          </span>
        </motion.div>
        <motion.div
          className="col-span-12 md:col-span-6 flex flex-col gap-6 px-4 lg:px-0 md:col-start-7"
          variants={itemVariants}
        >
          {SKILLS.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col"
              initial="hidden"
              whileInView="visible"
              variants={itemVariants}
            >
              <div className="flex flex-col">
                <span className="font-bold text-base tracking-wide">
                  {skill.label}
                </span>
              </div>
              <div className="flex flex-col">
                <ul className="flex flex-wrap">
                  {skill.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="font-medium text-base tracking-wide"
                    >
                      {item},&nbsp;
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.main>
    </div>
  );
}
