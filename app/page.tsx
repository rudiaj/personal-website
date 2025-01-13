"use client";

import { EDUCATION, EXPERIENCE, SKILLS } from "@/constants/data";
import Image from "next/image";
import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll({ container: containerRef });

  const width = useTransform(scrollY, [0, 100], [90, 45]);
  const height = useTransform(scrollY, [0, 100], [87.42, 43.71]);

  return (
    <div ref={containerRef} className="h-screen overflow-auto scroll-smooth">
      <main className="max-w-[1252px] mx-auto lg:px-[50px] pb-12 pt-8 grid grid-cols-12 gap-x-5">
        <div className="col-span-12 md:col-span-4 md:mb-0 mb-10 px-4 lg:px-0 sticky top-0 self-start bg-white py-4">
          <div className="flex gap-5 flex-col">
            <motion.div style={{ width, height }}>
              <Image
                alt="logo"
                src="/logo.svg"
                height={87.42}
                width={90}
                className="w-full h-full"
                priority
              />
            </motion.div>
            <span className="font-bold text-lg tracking-wide">Rudi Aj</span>
            <div className="flex flex-col">
              <span className="font-medium text-base tracking-wide">
                Senior Frontend Engineer (Rijeka, Croatia)
              </span>
              <span className="font-medium text-sm tracking-wide text-black/60">
                10 years of experience specialising in Next.js and React.
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-medium text-base tracking-wide">
                aj.rudi@gmail.com
              </span>
              <span className="font-medium text-base tracking-wide">
                +385 97 792 9943
              </span>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-2 md:mb-0 mb-4 px-4 lg:px-0">
          <span className="font-bold text-base tracking-widest uppercase">
            Experience
          </span>
        </div>
        <div className="col-span-12 md:col-span-6 flex flex-col gap-6 px-4 lg:px-0 mb-10">
          {EXPERIENCE.map((exp, index) => (
            <div key={index} className="flex flex-col">
              <div className="flex flex-col mb-3">
                <span className="font-medium text-sm tracking-wide text-black/60">
                  {exp.date}
                </span>
                <span className="font-bold text-base tracking-wide">
                  {exp.company}
                </span>
                <span className="font-medium text-base tracking-wide italic">
                  {exp.role}
                </span>
                {exp.description && (
                  <span className="font-medium text-base tracking-wide">
                    {exp.description}
                  </span>
                )}
              </div>
              <div className="flex flex-col">
                <ul className="list-disc flex-flex-col gap-2 pl-3">
                  {exp.tasks.map((task, taskIndex) => (
                    <li
                      key={taskIndex}
                      className="font-medium text-base tracking-wide"
                    >
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="col-span-12 md:col-span-8 border-b border-black/10 md:col-start-5 mb-10"></div>
        <div className="col-span-12 md:col-span-2 md:mb-0 mb-4 px-4 lg:px-0 md:col-start-5">
          <span className="font-bold text-base tracking-widest uppercase">
            Education
          </span>
        </div>
        <div className="col-span-12 md:col-span-6 flex flex-col gap-6 px-4 lg:px-0  mb-10 md:col-start-7">
          {EDUCATION.map((edu, index) => (
            <div key={index} className="flex flex-col">
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
            </div>
          ))}
        </div>
        <div className="col-span-12 md:col-span-8 border-b border-black/10 md:col-start-5 mb-10"></div>
        <div className="col-span-12 md:col-span-2 md:mb-0 mb-4 px-4 lg:px-0 md:col-start-5">
          <span className="font-bold text-base tracking-widest uppercase">
            Skills
          </span>
        </div>
        <div className="col-span-12 md:col-span-6 flex flex-col gap-6 px-4 lg:px-0 md:col-start-7">
          {SKILLS.map((skill, index) => (
            <div key={index} className="flex flex-col">
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
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
