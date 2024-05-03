// components/ExperienceCard.js

import { motion } from "framer-motion";

interface ExperienceCardProps {
  date: string;
  title: string;
  subtitle: string;
  description: string;
  delay_time: number;
}

export function ExperienceCard({ date, title, subtitle, description, delay_time }:ExperienceCardProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { delay: delay_time, duration: 2 },
        },
      }}
    >
      <div className="event" data-date={date}>
        <div className="md:p-10 xsm:pt-10">
          <h1 className="mt-3 text-4xl xsm:text-2xl sm:text-3x text-[#FCA311]">{title}</h1>
          <h2 className="mt-2 text-3xl xsm:text-xl sm:text-2xl roboto">{subtitle}</h2>
          <p className="mt-5 text-2xl  xsm:text-base sm:text-lg roboto">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}
