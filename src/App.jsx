import { useState } from "react";
import Header from "./views/Header";
import Section from "./views/Section";
import Hero from "./views/Hero";
import { motion } from "framer-motion";

function App() {
  const navitems = ["Home", "Contact Us", "About"].map((v, i) => (
    <li key={i}>{v}</li>
  ));

  const [brightness, setBrightness] = useState("light");

  window.addEventListener("scroll", () => {
    if (window.scrollY < window.innerHeight - 48) {
      setBrightness("light");
    } else {
      setBrightness("dark");
    }
  });

  const fadeSlideBottom = { translateY: [100, 0], opacity: [0, 1] };

  return (
    <div>
      <Header navitems={navitems} brightness={brightness} animateDealy={1.3} />
      <Hero />
    </div>
  );
}

export default App;
