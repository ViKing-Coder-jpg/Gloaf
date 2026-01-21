import React, { useRef } from "react";
import {motion, useScroll, useTransform } from "framer-motion";
import Burger from "../../../assets/Images/Burger.jpg";
import Waffle from "../../../assets/Images/Waffle.jpg";
import Gajarhalwa from "../../../assets/Images/Gajar-halwa.jpg";

function DetailedIntro() {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 0.3], ["100vh", "-7vh"]);
  const y2 = useTransform(scrollYProgress, [0.1, 0.4], ["120vh", "5vh"]);
  const y3 = useTransform(scrollYProgress, [0.2, 0.5], ["140vh", "-12vh"]);
  const texty = useTransform(scrollYProgress, [0.3, 0.6], ["125vh", "6vh"]);
  const opacity1 = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const opacity2 = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);
  const opacity3 = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);
  const textOpacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);

  return (
    <section ref={targetRef} className="relative h-[200vh]">
      <div className="sticky top-0 flex h-screen items-center justify-evenly">

        <motion.div style={{ y: y1 ,opacity:opacity1 }} className="w-[20vw]">
          <img
            src={Burger}
            className="h-[50vh] w-full object-cover rounded-xl shadow-lg"
          />
        </motion.div>

        <motion.div style={{ y: y2 ,opacity:opacity2}} className="w-[20vw]">
          <img
            src={Gajarhalwa}
            className="h-[50vh] w-full object-cover rounded-xl shadow-lg"
          />
          <motion.div style={{y:texty,opacity:textOpacity}}>
            <p className=" text-center text-2xl text-[#7f858f] pb-3">
              Experiance from the first aroma to the last bite—pure local goodness.
            </p>
          </motion.div>
        </motion.div>

        <motion.div style={{ y: y3 ,opacity:opacity3}} className="w-[20vw]">
          <img
            src={Waffle}
            className="h-[50vh] w-full object-cover rounded-xl shadow-lg"
          />
        </motion.div>

      </div>
    </section>
  );
}

export default DetailedIntro;
