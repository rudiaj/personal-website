import { motion } from "framer-motion";

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

interface ExperienceItemProps {
  experience: {
    date: string;
    company: string;
    role: string;
    description?: string;
    tasks: string[];
  };
}

export const ExperienceItem = ({
  experience: { date, company, role, description, tasks },
}: ExperienceItemProps) => {
  return (
    <motion.div
      className="flex flex-col"
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
      }}
      variants={itemVariants}
    >
      <div className="flex flex-col mb-2">
        <span className="font-medium text-sm tracking-wide text-black/60">
          {date}
        </span>
        <span className="font-bold text-base tracking-wide">{company}</span>
        <span className="font-medium text-base tracking-wide italic mb-2">
          {role}
        </span>
        {description && (
          <span className="font-medium text-base tracking-wide">
            {description}
          </span>
        )}
      </div>
      <div className="flex flex-col">
        <ul className="list-disc flex flex-col gap-1 pl-3">
          {tasks.map((task, taskIndex) => (
            <li key={taskIndex} className="font-medium text-base tracking-wide">
              {task}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};
