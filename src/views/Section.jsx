import { motion } from "framer-motion";

const Section = ({ style, className, children, animate, transition, gap }) => {
  return (
    <motion.section
      style={{ gap: gap, ...style }}
      className={className}
      animate={animate}
      transition={transition}
    >
      <div className="flex">{children}</div>
    </motion.section>
  );
};

export default Section;
