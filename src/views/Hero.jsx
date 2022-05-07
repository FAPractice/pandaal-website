import React from "react";
import { motion } from "framer-motion";
import Section from "./Section";

function Hero() {
  const fadeSlideBottom = { translateY: [100, 0], opacity: [0, 1] };

  return (
    <Section
      className="hero"
      // animate={{ background: ["black", "hsl(349, 90%, 63%)"] }}
      // transition={{ delay: 1.2, duration: 0.5, type: "tween" }}
    >
      <div className="headings">
        <motion.h1
          animate={fadeSlideBottom}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="heading primary"
        >
          Event Management is Hard
        </motion.h1>
        <motion.h2
          animate={fadeSlideBottom}
          transition={{ duration: 0.4, delay: 0.6, ease: "easeOut" }}
          className="heading secondary"
        >
          We make it easy for you.
        </motion.h2>
      </div>
      <div className="content">
        <motion.p
          animate={fadeSlideBottom}
          transition={{ duration: 0.3, delay: 0.9, ease: "easeOut" }}
        >
          Availabe on iOS, Android and Web
        </motion.p>
        <div
          className="cta-flex"
          animate={fadeSlideBottom}
          transition={{ delay: 1.2, duration: 0.2, ease: "easeIn" }}
        >
          <motion.button
            animate={fadeSlideBottom}
            transition={{ delay: 1, duration: 0.2, ease: "easeIn" }}
            className="cta white primary"
          >
            Download Now
          </motion.button>
          <motion.button
            animate={fadeSlideBottom}
            transition={{ delay: 1.2, duration: 0.2, ease: "easeIn" }}
            className="cta white"
          >
            Browse Online
          </motion.button>
        </div>
      </div>
    </Section>
  );
}

export default Hero;
