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
        > <div className="main-components relative pt-10 flex flex-col items-center justify-center text-[#24f29c] z-1">
              <img
              className="w-[10%] h-[10%]"
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
          <div className="main-components relative flex flex-col items-center justify-center text-[#24f29c] z-1">
            <div className="text-9xl pt-6">Mahir</div>
            <div className="text-6xl pt-10">
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
