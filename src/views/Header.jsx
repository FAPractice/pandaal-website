import { motion } from "framer-motion";

const Header = ({
  children,
  navitems,
  brightness,
  animateDealy,
  style,
  className,
}) => {
  return (
    <motion.header
      animate={{ opacity: [0, 1] }}
      transition={{ delay: animateDealy, duration: 0.2, ease: "easeIn" }}
      className={"bright" + className}
      style={{ ...style }}
    >
      <nav>
        {children}
        <h1
          style={{ color: brightness === "light" ? "white" : "black" }}
          className="logo"
        >
          Pandaal
        </h1>
        <ul style={{ color: brightness === "light" ? "white" : "black" }}>
          {navitems}
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;
