"use client";

import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <>
      <div>
        <div className="grid absolute left-0 top-auto right-0 bottom-0 overflow-hidden h-[70vh] perspective-[56.25vh]">
          <div className="grid-lines absolute left-0 top-0 right-0 bottom-0 z-0 w-[100%] h-[200%] origin-top bg-[length:4vh_3vh] bg-repeat z-0"></div>
        </div>
        <div className="grid-mask absolute left-0 top-auto right-0 bottom-0 bg-transparent h-[80vh]"></div>
        <div className="crt"></div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 1,
              opacity: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.4,
                duration: 1,
              },
            },
          }}
        > <div className="relative pt-10 flex flex-col items-center justify-center text-[#24f29c] z-1">
              <img
              className="xsm:w-[30%] sm:w-[25%] md:w-[20%] lg:w-[15%] 2xl:w-[175px]"
              src="/robot.png"
              alt="Cyberpunk Robot"
            />
        </div>
          
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 1,
              opacity: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.6,
                duration: 1,
              },
            },
          }}
        >
          <div className="heading relative flex flex-col items-center justify-center text-[#24f29c] z-1">
            <div className="text-9xl xsm:text-5xl sm:text-6xl md:text-7xl pt-6">Mahir</div>
            <div className="text-6xl xsm:text-2xl sm:text-3xl md:text-4xl pt-10">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .pauseFor(1500)
                    .typeString("Software & AI Engineer ")
                    .start();
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
