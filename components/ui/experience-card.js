// components/ExperienceCard.js

import { motion } from "framer-motion";

export function ExperienceCard({ date, title, subtitle, description, delay_time }) {
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
        <div className="p-10">
          <h1 className="mt-3 text-4xl text-[#FCA311]">{title}</h1>
          <h2 className="mt-2 text-3xl roboto">{subtitle}</h2>
          <p className="mt-5 text-2xl roboto">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}
