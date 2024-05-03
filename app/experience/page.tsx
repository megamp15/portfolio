"use client";

import { ExperienceCard } from "@/components/ui/experience-card";
import { motion } from "framer-motion";

export default function experience() {
  return (
    <>
      <div className="min-h-fit flex flex-col items-center justify-center text-[#24f29c]">
        <h1 className="text-8xl">EXPERIENCE</h1>
      </div>
      <div className="min-w-full flex flex-col roboto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { delay: 0.1, duration: 2 },
            },
          }}
        >
          <div className="tborder m-20 p-10 timeline-bg">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { delay: 0.1, duration: 2 },
                },
              }}
            >
              <div className="event" data-date="Apr 2024 - Present">
                <div className="p-10">
                  <h1 className="mt-3 text-4xl text-[#FCA311]">
                    AI Sports Card Grading & Authentication
                  </h1>
                  <h2 className="mt-2 text-3xl roboto">Project Intern</h2>
                  <p className="mt-5 text-2xl roboto">
                    Utilizing computer vision and machine learning for automated
                    grading and authentication, focusing on training an
                    open-source object detection model, YOLO, to detect various
                    surface damages on trading cards through transfer learning.
                  </p>
                </div>
              </div>
            </motion.div>
            <ExperienceCard
              date="Aug 2023 - Apr 2024"
              title="Zbottomline LLC"
              subtitle="Contract Software Engineer"
              description="Developed full-stack accounting and back-office management apps, employing modern Web App Frameworks, REST APIs, Relational Databases, and cloud technologies to ensure scalable and efficient operations."
              delay_time={0.3}
            />
            <ExperienceCard
              date="Jan 2022 - Aug 2023"
              title="Pariveda Solutions"
              subtitle="Software Engineering Consultant II"
              description="Demonstrated expertise in quickly adapting to new technologies and business domains to successfully architect and build scalable, maintainable software systems that meet the client's business needs. Automated client processes in Salesforce and UI/UX testing using Selenium and Python."
              delay_time={0.5}
            />
            <ExperienceCard
              date="May 2021 - Aug 2021"
              title="Digital Core Team at The Ismaili National Council for USA"
              subtitle="Software Developer Intern"
              description="Engaged in full-stack development by enhancing existing applications and collaborating with experienced senior developers on a new application. This experience allowed me to delve into requirement gathering, UI/UX discussions, API and database design, and adopt efficient Agile development practices."
              delay_time={0.5}
            />
            <ExperienceCard
              date="Jan 2019 - June 2021"
              title="Aggienova"
              subtitle="Software Developer - Team Lead and Researcher"
              description="Managed a pipeline of scripts that adapted astronomical concepts and data science techniques to manipulate supernovae data and develop data visuals that were presented at expos and physics festivals. As a team lead, I applied Scrum to a team of undergraduates to efficiently produce weekly updates within the school term."
              delay_time={0.5}
            />
            <ExperienceCard
              date="Nov 2020 - May 2021"
              title="Texas A&M College of Engineering"
              subtitle="Student Technician - Android Developer"
              description="Researched common security vulnerabilities in Android mobile development and addressed these in a secure and non-secure versions of an Android application as a guide for developers at Bespin, the U.S. Air Force's mobile center for excellence."
              delay_time={0.5}
            />
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { delay: 0.5, duration: 2 },
                },
              }}
            >
              <div
                className="event event-none"
                data-date="June 2019 - Sep 2020"
              >
                <div className="px-10 pt-10 ">
                  <h1 className="mt-3 text-4xl text-[#FCA311]">
                    Zbottomline LLC
                  </h1>
                  <h2 className="mt-2 text-3xl roboto">
                    Contract Software Engineer
                  </h2>
                  <p className="mt-5 text-2xl roboto">
                    Designed and developed the Retail Lottery Downloader,
                    proprietary-based software by Zbottomline to reduce lottery
                    data processing from the Texas Lottery Website. Created
                    additional accounting templates for clients and data
                    manipulation scripts to optimize data entry work.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
