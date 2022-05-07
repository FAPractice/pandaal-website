import { motion } from "framer-motion";

const Section = ({
  style,
  className,
  children,
  animate,
  transition,
  heading,
  subheading,
  headline,
}) => {
  return (
    <motion.section
      style={{ ...style }}
      className={className}
      animate={animate}
      transition={transition}
    >
      <h1>{heading}</h1>
      <h2>{subheading}</h2>
      <h3>{headline}</h3>
      <div className="flex">{children}</div>
    </motion.section>
  );
};

export default Section;
