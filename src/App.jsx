import { useState } from "react";
import Header from "./views/Header";
import Section from "./views/Section";
import Hero from "./views/Hero";
import Card from "./views/Card";

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
      <Section gap="48px">
        <h1>How it Works?</h1>
        <h2>
          Our Event management platform provide you with the tools to design and
          run successful Online/Offline events.
        </h2>
        <div className="gridx3">
          <Card>
            <h3>Fill the Event Form</h3>
          </Card>
          <Card>
            <h3>Launch the Event</h3>
          </Card>
          <Card>
            <h3>You Sip Wine</h3>
          </Card>
        </div>
      </Section>
    </div>
  );
}

export default App;
